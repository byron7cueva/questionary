import debug from 'debug';
import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { ipcRenderer } from 'electron';

import { CourseItem } from '../components/CourseItem';
import { Options, Container } from '../components/Layout';
import { Course } from '../types/Course';
import { HttpService } from '../lib/http';

const log = debug('questionary:web:courses');

interface ICousesListState {
  courses: Course[];
  newCourse: Course;
  toDelete: Course;
}

class Courses extends Component<RouteComponentProps, ICousesListState> {

  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      courses: [],
      newCourse: null,
      toDelete: null
    };
  }

  handleAddCourse = () => {
    const newCourse: Course = {
      idCourse: null,
      name: '',
      questions: []
    };
    this.setState({newCourse});
  };

  handleAccepDeleteDialog = () => {
    this.deleteCourse();
  };

  clearToDelete = () => {
    this.setState({toDelete: null});
  };

  handleClickQuestionary = (course: Course) => {
    // TODO Camabiar por idCourse, id es temporal para el mock API
    this.props.history.push(`/courses/${course.id}`);
  };

  handleClickSaveItem = (course: Course) => {
    this.saveCourse(course);
  };

  handleClickDeteleItem = (course: Course) => {
    this.setState({toDelete: course});
    ipcRenderer.send('show-question', 'Eliminar curso', `Esta seguro que desea eliminar el curso: ${course.name}`);
  };

  handleClickCancelEdit = () => {
    if (this.state.newCourse) {
      this.setState({newCourse: null});
    }
  }

  componentDidMount() {
    this.getCourses();
    ipcRenderer.on('acept-dialog', this.handleAccepDeleteDialog);
    ipcRenderer.on('cancel-dialog', this.clearToDelete);
  }
  
  componentWillUnmount() {
    ipcRenderer.off('acept-dialog', this.handleAccepDeleteDialog);
    ipcRenderer.off('cancel-dialog', this.clearToDelete);
  }

  async getCourses() {
    try {
      const courses: Course[] = await HttpService.getInstance().get('/courses');
      this.setState({courses});
    } catch (error) {
      log(error);
      ipcRenderer.send('show-error-dialog', 'Questionary', 'No se pudo obtener la información de los cursos, revise su conexión');
    }
  }

  async saveCourse(course: Course) {
    try {
      if (this.state.newCourse) {
        // TODO Quitar la siguiente linea solo se programo para la mock api
        course.idCourse = Math.floor(Math.random() * 100) + 1;
        await HttpService.getInstance().post('/courses', course);
        this.setState({newCourse: null});
      } else {
        await HttpService.getInstance().put('/courses', course.idCourse.toString(), course);
      }
      this.getCourses();
    } catch (error) {
      log(error);
      ipcRenderer.send('show-error-dialog', 'Questionary', 'No se pudo guardar el curso, revise su conexión');
    }
  }

  async deleteCourse() {
    const { toDelete } = this.state;
    try {
      if (toDelete) {
        await HttpService.getInstance().delete('/courses', toDelete.id);
        this.clearToDelete();
        this.getCourses();
      }
    } catch (error) {
      log(error);
      ipcRenderer.send('show-error-dialog', 'Questionary', 'No se pudo eleminar el curso, revise su conexión');
    }
  }

  render() {
    return (
      <>
        <Options>
          <button
            className='btn btn-green'
            onClick={this.handleAddCourse}
          >
            Agregar curso
          </button>
        </Options>
        <Container>
          {
            this.state.newCourse && (
              <CourseItem
                data={this.state.newCourse}
                isEditable={true}
                editing={true}
                hideOptionsCourse={true}
                onClickSave={this.handleClickSaveItem}      
                onClickCancelEdit={this.handleClickCancelEdit}
              />
            )
          }
          {
            this.state.courses.map((item: Course) => (
              <CourseItem
                key={item.idCourse}
                data={item}
                isEditable={true}
                onClickQuestionary={() => this.handleClickQuestionary(item)}
                onClickSave={this.handleClickSaveItem}
                onClickDelete={() => this.handleClickDeteleItem(item)}
              />
            ))
          }
        </Container>
      </>
    );
  }
}

const CoursesList = withRouter(Courses);

export {
   CoursesList
}