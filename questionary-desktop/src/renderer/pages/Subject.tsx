import React from 'react';

import { QuestionItem } from '../components/QuestionItem';

const Subject = (): JSX.Element => (
  <div>
    <header>
      <h3>Cuestionario</h3>
      <h1>Nombre de la materia</h1>
      <div>
        <button className='btn btn-green'>Agregar pregunta</button>
      </div>
    </header>
    <hr/>
    <div>
      <QuestionItem question="Esta es una pregunta de prueba" answere="Esta es una respuesta de prueba" />
      <QuestionItem question="Esta es una pregunta de prueba" answere="Esta es una respuesta de prueba" />
    </div>
  </div>
);

export {
  Subject
}