import React from 'react';

import { CourseItem } from '../components/CourseItem';
import { Options, Container } from '../components/Layout';

export const CoursesList = () => (
  <>
    <Options>
      <button className='btn btn-green'>Agregar curso</button>
    </Options>
    <Container>
      <CourseItem
        data={{
          name: 'Curso numero1'
        }}
        isEditable={true}
      />
      <CourseItem
        data={{
          name: 'Curso numero1'
        }}
        isEditable={true}
      />
    </Container>
  </>
);