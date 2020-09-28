import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { CourseItem } from '../components/CourseItem';
import { Options, Container } from '../components/Layout';
import { Course } from '../types/Course';

export const CoursesList = () => {
  const history = useHistory();
  const [courses, setCourses] = useState([]);

  const data: Course[] = [
    {idCourse: 1 , name: 'Electron', questions: []},
    {idCourse: 2 , name: 'Angular', questions: []},
    {idCourse: 3 , name: 'React', questions: []},
    {idCourse: 4 , name: 'Vue', questions: []},
  ]

  useEffect(() => {
    setCourses(data);
  }, []);

  const handleClickQuestionary = (idCourse: number) => {
    history.push(`/courses/${idCourse}`);
  }

  return (
    <>
      <Options>
        <button className='btn btn-green'>Agregar curso</button>
      </Options>
      <Container>
        {
          courses.map((item: Course) => (
            <CourseItem
              key={item.idCourse}
              data={{...item}}
              isEditable={true}
              onClickQuestionary={() => handleClickQuestionary(item.idCourse)}
            />
          ))
        }
      </Container>
    </>
  );
}