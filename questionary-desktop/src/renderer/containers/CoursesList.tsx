import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { CourseItem } from '../components/CourseItem';
import { Options, Container } from '../components/Layout';
import { Course } from '../types/Course';
import { HttpService } from '../lib/http';

export const CoursesList = () => {
  const history = useHistory();
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState<Course | null>(null);

  useEffect(() => {
    getCourses();
  }, []);

  const handleAddCourse = () => {
    const course: Course = {
      idCourse: null,
      name: '',
      questions: []
    };
    setNewCourse(course);
  }

  const getCourses = async () => {
    const data = await HttpService.getInstance().get('/courses');
    setCourses(data);
  }

  const saveCourse = async (course: Course) => {
    try {
      if (newCourse) {
        // TODO Quitar la siguiente linea solo se programo para la mock api
        course.idCourse = Math.floor(Math.random() * 100) + 1;
        await HttpService.getInstance().post('/courses', course);
        setNewCourse(null);
      } else {
        await HttpService.getInstance().put('/courses', course.idCourse.toString(), course);
      }
      getCourses();
    } catch (error) {
      // TODO Gestionar el error
      console.error(error);
    }
  }

  const deleteCourse = async (course: Course) => {
    try {
      await HttpService.getInstance().delete('/courses', course.id);
      getCourses();
    } catch (error) {
      // TODO Gestionar el manejo de errores
      console.error(error);
    }
  }

  const handleClickQuestionary = (idCourse: number) => {
    history.push(`/courses/${idCourse}`);
  }

  const handleClickSaveItem = (course: Course) => {
    saveCourse(course);
  }

  const handleClickDeteleItem = (course: Course) => {
    deleteCourse(course);
  }

  const handleClickCancelEdit = () => {
    if (newCourse) {
      setNewCourse(null);
    }
  }

  return (
    <>
      <Options>
        <button
          className='btn btn-green'
          onClick={handleAddCourse}
        >
          Agregar curso
        </button>
      </Options>
      <Container>
        {
          newCourse && (
            <CourseItem
              data={newCourse}
              isEditable={true}
              editing={true}
              hideOptionsCourse={true}
              onClickSave={handleClickSaveItem}      
              onClickCancelEdit={handleClickCancelEdit}
            />
          )
        }
        {
          courses.map((item: Course) => (
            <CourseItem
              key={item.idCourse}
              data={item}
              isEditable={true}
              onClickQuestionary={() => handleClickQuestionary(item.idCourse)}
              onClickSave={handleClickSaveItem}
              onClickDelete={() => handleClickDeteleItem(item)}
            />
          ))
        }
      </Container>
    </>
  );
}