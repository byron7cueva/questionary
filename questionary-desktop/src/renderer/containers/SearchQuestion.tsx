import debug from 'debug';
import React, { useState } from 'react';
import { ipcRenderer } from 'electron';
import { Question } from 'questionary-domain';

import { Options, Container } from '../components/Layout';
import { QuestionItem } from '../components/QuestionItem';
import { HttpService } from '../lib/http';

const log = debug('questionary:web:search');

export const SearchQuestion = (): JSX.Element => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Question[]>([]);

  const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(event.target.value);
  }

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      searchQuestions();
    }
  }

  const searchQuestions = async () => {
    try {
      const datos: Question[] = await HttpService.getInstance().get<Question[]>(`/questions?questionQuery=${query}`);
      setResults(datos);
    } catch (error) {
      log(error);
      ipcRenderer.send('show-error-dialog', 'Questionary', error.message);
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
              key={item.questionId}
              data={{...item}}
            />
          ))
        }
      </Container>
    </>
  );
}