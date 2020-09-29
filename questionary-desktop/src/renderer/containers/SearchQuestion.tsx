import debug from 'debug';
import React, { useState } from 'react';
import { ipcRenderer } from 'electron';

import { Question } from '../types/Question';
import { Options, Container } from '../components/Layout';
import { QuestionItem } from '../components/QuestionItem';
import { HttpService } from '../lib/http';

const log = debug('questionary:web:search');

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

  const searchQuestions = async () => {
    try {
      const datos = await HttpService.getInstance().get(`/questions?question=${query}`);
      setResults(datos);
    } catch (error) {
      log(error);
      ipcRenderer.send('show-error-dialog', 'Questionary', 'No se pudo realizar la consulta, revise su conexión');
    }
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