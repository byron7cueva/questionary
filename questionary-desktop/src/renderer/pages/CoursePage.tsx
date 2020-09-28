import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Layout } from '../components/Layout';
import { Header } from '../components/Header';
import { useMenuNavigate } from '../hooks/useMenuNavigate';
import { QuestionItem } from '../components/QuestionItem';
import { Options, Container } from '../components/Layout';
import { Course } from '../types/Course';
import { Question } from '../types/Question';

export interface CoursePageParams {
  idCourse: string;
}

export const CoursePage = (): JSX.Element => {
  useMenuNavigate();
  const { idCourse } = useParams<CoursePageParams>();
  const [course, setCourse] = useState(null);

  const data: Course = {
    idCourse: 1,
    name: 'Electron',
    questions: [
      { idQuestion: 1, question: 'Pregunta de prueba 1', answere: 'Respuesta de prueba 1' },
      { idQuestion: 2, question: 'Pregunta de prueba 1', answere: 'Respuesta de prueba 2' },
      { idQuestion: 3, question: 'Pregunta de prueba 1', answere: 'Respuesta de prueba 3' },
      { idQuestion: 4, question: 'Pregunta de prueba 1', answere: 'Respuesta de prueba 4' },
    ]
  };

  useEffect(() => {
    console.log(idCourse);
    if (idCourse) {
      setCourse(data);
    }
  }, []);

  const handleClickDeleteItem = (question: Question) => {
    console.log('Delete question', question);
  }

  const handleClickSaveItem = (question: Question) => {
    console.log('Save question', question);
  }

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
                <button className='btn btn-green'>Agregar pregunta</button>
            </Options>
            <Container>
              {
                course.questions.map((item: Question) => (
                  <QuestionItem
                    key={item.idQuestion}
                    data={{...item}}
                    isEditable={true}
                    onClickDelete={() => handleClickDeleteItem(item)}
                    onClickSave={handleClickSaveItem}
                  />
                ))
              }
            </Container>
          </>
        ) : (
          <h1>No existe el curso seleccionado</h1>
        )
      }
    </Layout>
  );
}