import debug from 'debug';
import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ipcRenderer, IpcRendererEvent } from 'electron';

import { Layout } from '../components/Layout';
import { Header } from '../components/Header';
import { QuestionItem } from '../components/QuestionItem';
import { Options, Container } from '../components/Layout';
import { Course } from '../types/Course';
import { Question } from '../types/Question';
import { HttpService } from '../lib/http';

const log = debug('questionary:web:course');

interface ICoursePageParams {
  idCourse: string;
}

interface ICursePageState {
  course: Course;
  newQuestion: Question;
  toDelete: Question;
}

class CourseComponent extends Component<RouteComponentProps<ICoursePageParams>, ICursePageState> {

  constructor(props: any) {
    super(props);
    this.state = {
      course: null,
      newQuestion: null,
      toDelete: null
    };
  }

  handleClickAddQuestion = () => {
    const newQuestion: Question = {
      idQuestion: null,
      idCourse: Number(this.props.match.params.idCourse),
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

  handleNavigate = (event: IpcRendererEvent, to: string) => {
    this.props.history.push(to);
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
      const course = await HttpService.getInstance().get(`/courses/${this.props.match.params.idCourse}`);
      this.setState({course});
    } catch (error) {
      log(error);
      ipcRenderer.send('show-error-dialog', 'Questionary', 'No se pudo obtener la información del curso, revise su conexión');
    }
  }

  async saveQuestion(question: Question) {
    try {
      if (this.state.newQuestion) {
        // TODO Remover la asignacion del idQuestion se la pone por el mock API
        question.idQuestion = Math.floor(Math.random() * 100) + 1;
        await HttpService.getInstance().post('/questions', question);
        this.setState({newQuestion: null});
      } else {
        // TODO Cambiar el id por idQuestion
        await HttpService.getInstance().put('/questions', question.id, question);
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
        // TODO Cambiar el id por idQuestion
        await HttpService.getInstance().delete('/questions', toDelete.id);
        this.clearToDelete();
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
                key={item.idQuestion}
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