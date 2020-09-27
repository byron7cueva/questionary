import React from 'react';

import { QuestionItem } from '../components/QuestionItem';
import { Options, Container } from '../components/Layout';

export const Questions = () => {
  return (
    <>
      <Options>
          <button className='btn btn-green'>Agregar pregunta</button>
      </Options>
      <Container>
        <QuestionItem
          data={{
            question: 'Esta es una pregunta de prueba',
            answere: 'Esta es una respuesta de prueba'
          }}
          isEditable={true}
        />
        <QuestionItem
          data={{
            question: 'Esta es una pregunta de prueba',
            answere: 'Esta es una respuesta de prueba'
          }}
          isEditable={true}
        />
        <QuestionItem
          data={{
            question: 'Esta es una pregunta de prueba',
            answere: 'Esta es una respuesta de prueba'
          }}
          isEditable={true}
        />
      </Container>
    </>
  )
}