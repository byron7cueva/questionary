import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Layout } from '../components/Layout';
import { Header } from '../components/Header';
import { useMenuNavigate } from '../hooks/useMenuNavigate';
import { QuestionItem } from '../components/QuestionItem';
import { Options, Container } from '../components/Layout';
import { Course } from '../types/Course';
import { Question } from '../types/Question';
import { HttpService } from '../lib/http';

export interface CoursePageParams {
  idCourse: string;
}

export const CoursePage = (): JSX.Element => {
  useMenuNavigate();
  const { idCourse } = useParams<CoursePageParams>();
  const [course, setCourse] = useState<Course>(null);
  const [newQuestion, setNewQuestion] = useState<Question>(null);

  useEffect(() => {
    getCourse();
  }, []);

  const getCourse = async () => {
    try {
      const data = await HttpService.getInstance().get(`/courses/${idCourse}`);
      setCourse(data);
    } catch (error) {
      // TODO Manejar bien el error
      console.error(error);
    }
  }

  const saveQuestion = async (question: Question) => {
    try {
      if (newQuestion) {
        // TODO Remover la asignacion del idQuestion se la pone por el mock API
        question.idQuestion = Math.floor(Math.random() * 100) + 1;
        await HttpService.getInstance().post('/questions', question);
        setNewQuestion(null);
      } else {
        // TODO Cambiar el id por idQuestion
        await HttpService.getInstance().put('/questions', question.id, question);
      }
      getCourse();
    } catch (error) {
      // TODO Manejar bien el error
      console.error(error);
    }
  }

  const handleClickAddQuestion = () => {
    const question: Question = {
      idQuestion: null,
      idCourse: Number(idCourse),
      question: '',
      answere: ''
    };
    setNewQuestion(question);
  }

  const handleClickDeleteItem = (question: Question) => {
    console.log('Delete question', question);
  }

  const handleClickSaveItem = (question: Question) => {
    saveQuestion(question);
  }

  const handleClickCancelEdit = () => {
    setNewQuestion(null);
  }

  const renderQuestionItems = (): JSX.Element => {
    if (course.questions && course.questions.length > 0) {
      return (
        <>
          {
            course.questions.map((item: Question) => (
              <QuestionItem
                key={item.idQuestion}
                data={item}
                isEditable={true}
                onClickDelete={() => handleClickDeleteItem(item)}
                onClickSave={handleClickSaveItem}
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
                  onClick={handleClickAddQuestion}
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
                    onClickSave={handleClickSaveItem}
                    onClickCancelEdit={handleClickCancelEdit}
                  />
                )
              }
              { renderQuestionItems() }
            </Container>
          </>
        ) : (
          <h1>No existe el curso seleccionado</h1>
        )
      }
    </Layout>
  );
}