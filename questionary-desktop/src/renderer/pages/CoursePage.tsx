import React, { useState } from 'react';

import { Layout } from '../components/Layout';
import { Header } from '../components/Header';
import { useMenuNavigate } from '../hooks/useMenuNavigate';
import { QuestionItem } from '../components/QuestionItem';
import { Options, Container } from '../components/Layout';
import { Course } from '../types/Course';

export const CoursePage = (): JSX.Element => {
  useMenuNavigate();
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
  const [course, setCourse] = useState(data);

  return (
    <Layout>
      <Header
        title={course.name}
        subTitle="Cuestionario"
      />
      <Options>
          <button className='btn btn-green'>Agregar pregunta</button>
      </Options>
      <Container>
        {
          course.questions.map(item => {
            <QuestionItem
              data={{...item}}
              isEditable={true}
            />
          })
        }
      </Container>
    </Layout>
  );
}