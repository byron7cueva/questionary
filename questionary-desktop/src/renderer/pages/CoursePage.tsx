import debug from 'debug';
import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ipcRenderer, IpcRendererEvent } from 'electron';
import { Course, Question, QuestionCreate } from 'questionary-domain';

import { Header } from '../components/Header';
import { QuestionItem } from '../components/QuestionItem';
import { Options, Container, Layout } from '../components/Layout';
import { HttpService } from '../lib/http';
import { ILocationState } from '../types/ILocationState';

const log = debug('questionary:web:course');

interface ICoursePageParams {
  courseId: string;
}

interface ICursePageState {
  course: Course;
  newQuestion: QuestionCreate;
  toDelete: Question;
}

class CourseComponent extends Component<RouteComponentProps<ICoursePageParams>, ICursePageState> {

  constructor(props: RouteComponentProps<ICoursePageParams>) {
    super(props);
    this.state = {
      course: null,
      newQuestion: null,
      toDelete: null
    };
  }

  handleClickAddQuestion = () => {
    const newQuestion: QuestionCreate = {
      courseId: Number(this.props.match.params.courseId),
      question: '',
      answere: ''
    };
    this.setState({newQuestion});
  }

  handleAccepDeleteDialog = () => {
    this.deleteQuestion();
  };

  clearToDelete = () => {
    this.setState({toDelete: null});
  };


  handleClickDeleteItem = (question: Question) => {
    this.setState({toDelete: question});
    ipcRenderer.send('show-question', 'Eliminar pregunta', `Esta seguro que desea eliminar la pregunta: ${question.question}`);
  }

  handleClickSaveItem = (question: Question) => {
    this.saveQuestion(question);
  }

  handleClickCancelEdit = () => {
    this.setState({newQuestion: null});
  }

  handleNavigate = (event: IpcRendererEvent, to: string, state: ILocationState) => {
    this.props.history.push(to, state.modal? {modal: this.props.location} : undefined);
  }

  componentDidMount() {
    this.getCourse();
    ipcRenderer.on('navigate', this.handleNavigate);
    ipcRenderer.on('acept-dialog', this.handleAccepDeleteDialog);
    ipcRenderer.on('cancel-dialog', this.clearToDelete);
  }

  componentWillUnmount() {
    ipcRenderer.off('navigate', this.handleNavigate);
    ipcRenderer.off('acept-dialog', this.handleAccepDeleteDialog);
    ipcRenderer.off('cancel-dialog', this.clearToDelete);
  }

  async getCourse() {
    try {
      const course: Course = await HttpService.getInstance().get<Course>(`/courses/${this.props.match.params.courseId}`);
      this.setState({course});
    } catch (error) {
      log(error);
      ipcRenderer.send('show-error-dialog', 'Questionary', 'No se pudo obtener la información del curso, revise su conexión');
    }
  }

  async saveQuestion(question: Question) {
    try {
      if (this.state.newQuestion) {
        await HttpService.getInstance().post<Question>('/questions', question);
        this.setState({newQuestion: null});
      } else {
        await HttpService.getInstance().put<Question>('/questions', question.questionId.toString(), question);
      }
      this.getCourse();
    } catch (error) {
      log(error);
      ipcRenderer.send('show-error-dialog', 'Questionary', 'No se pudo guardar la pregunta, revise su conexión');
    }
  }

  async deleteQuestion() {
    const { toDelete } = this.state;
    try {
      if (toDelete) {
        await HttpService.getInstance().delete<boolean>('/questions', toDelete.questionId.toString());
        this.clearToDelete();
        this.getCourse();
      }
    } catch (error) {
      log(error);
      ipcRenderer.send('show-error-dialog', 'Questionary', 'No se pudo eliminar la pregunta, revise su conexión');
    }
  }

  renderQuestionItems(): JSX.Element {
    const { course } = this.state;
    if (course.questions && course.questions.length > 0) {
      return (
        <>
          {
            course.questions.map((item: Question) => (
              <QuestionItem
                key={item.questionId}
                data={item}
                isEditable={true}
                onClickDelete={() => this.handleClickDeleteItem(item)}
                onClickSave={this.handleClickSaveItem}
              />
            ))
          }
        </>
      )
    } else {
      return (
        <p> Este curso no tiene preguntas registradas</p>
      )
    }
  }

  render(): JSX.Element {
    const { course, newQuestion } = this.state;
    return (
      <Layout>
        {
          course ? (
            <>
              <Header
                title={course.name}
                subTitle="Cuestionario"
              />
              <Options>
                  <button
                    className='btn btn-green'
                    onClick={this.handleClickAddQuestion}
                  >
                    Agregar pregunta
                  </button>
              </Options>
              <Container>
                {
                  newQuestion && (
                    <QuestionItem
                      data={newQuestion}
                      isEditable={true}
                      editing={true}
                      onClickSave={this.handleClickSaveItem}
                      onClickCancelEdit={this.handleClickCancelEdit}
                    />
                  )
                }
                { this.renderQuestionItems() }
              </Container>
            </>
          ) : (
            <h1>No existe el curso seleccionado</h1>
          )
        }
      </Layout>
    );
  }
}

const CoursePage = withRouter(CourseComponent);

export {
  CoursePage
}