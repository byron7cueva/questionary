import React, { useState } from 'react';

import { Question } from '../types/Question';
import { Options, Container } from '../components/Layout';
import { QuestionItem } from '../components/QuestionItem';

export const SearchQuestion = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleChangeQuery = (event: any) => {
    setQuery(event.target.value);
  }

  const handleKeyUp = (event: any) => {
    if (event.key === 'Enter') {
      searchQuestions();
    }
  }

  const searchQuestions = () => {
    const datos: Question[] = [
      { idQuestion: 1, question: 'Prueba de pregunta 1', answere: 'Prueba de respuesta 1' },
      { idQuestion: 2, question: 'Prueba de pregunta 2', answere: 'Prueba de respuesta 2' },
      { idQuestion: 3, question: 'Prueba de pregunta 3', answere: 'Prueba de respuesta 3' },
      { idQuestion: 4, question: 'Prueba de pregunta 4', answere: 'Prueba de respuesta 4' }
    ];
    setResults(datos);
  }

  return (
    <>
      <Options>
        <input
          type="text"
          value={query}
          onChange={handleChangeQuery}
          onKeyUp={handleKeyUp}
        />
      </Options>
      <Container>
        {
          results.map((item: Question) => (
            <QuestionItem
              key={item.idQuestion}
              data={{...item}}
            />
          ))
        }
      </Container>
    </>
  );
}