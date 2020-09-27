import React from 'react';

import { Options, Container } from '../components/Layout';
import { QuestionItem } from '../components/QuestionItem';

export const SearchQuestion = () => (
  <>
    <Options>
      <input />
    </Options>
    <Container>
      <QuestionItem
        data={{
          question: 'Esta es una pregunta de prueba',
          answere: 'Esta es una respuesta de prueba'
        }}
      />
      <QuestionItem
        data={{
          question: 'Esta es una pregunta de prueba',
          answere: 'Esta es una respuesta de prueba'
        }}
      />
      <QuestionItem
        data={{
          question: 'Esta es una pregunta de prueba',
          answere: 'Esta es una respuesta de prueba'
        }}
      />
      <QuestionItem
        data={{
          question: 'Esta es una pregunta de prueba',
          answere: 'Esta es una respuesta de prueba'
        }}
      />
      <QuestionItem
        data={{
          question: 'Esta es una pregunta de prueba',
          answere: 'Esta es una respuesta de prueba'
        }}
      />
      <QuestionItem
        data={{
          question: 'Esta es una pregunta de prueba',
          answere: 'Esta es una respuesta de prueba'
        }}
      />
    </Container>
  </>
);