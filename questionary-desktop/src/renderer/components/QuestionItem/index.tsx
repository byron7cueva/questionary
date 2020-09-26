import React, { useState } from 'react';

import { QuestionItemContainer } from './style';
import { TextArea } from '../TextArea';
import { Question } from '../../types/Question';
import { Actions } from '../Actions';

export const QuestionItem = ({ question, answere}: Question): JSX.Element => {
  const [isEditable, setEditable] = useState(false);
  const [questionEdit, setQuestionEdit] = useState(question);
  const [answereEdit, setAnswereEdit] = useState(answere);

  const handleClickEditable = () => {
    if (!isEditable) {
      setQuestionEdit(question);
      setAnswereEdit(answere);
    }
    setEditable(!isEditable);
  }

  const handleChangeEdit = (event: any) => {
    const { name, value } = event.target;
    switch (name) {
      case 'question': setQuestionEdit(value); break;
      case 'answere': setAnswereEdit(value); break;
    }
  }

  return (
    <QuestionItemContainer className={`${isEditable ? 'isEdit' : ''}`}>
      <div className="question__container">
        {
          isEditable ? 
          (
            <div className="question--ediable">
              <TextArea
                name="question"
                className="question__title"
                placeholder="Pregunta"
                value={questionEdit}
                onChange={handleChangeEdit}
              />
              <TextArea
                name="answere"
                className="question__answere"
                placeholder="Respuesta"
                value={answereEdit}
                onChange={handleChangeEdit}
              />
            </div>
          ) :
          (
            <div className="question--read-only">
              <h5 className="question__title">
                {question}
              </h5>
              <div className="question__answere">
                {answere}
              </div>
            </div>
          )
        }
      </div>
      <Actions editing={isEditable} onClickEdit={handleClickEditable} />
    </QuestionItemContainer>
  );
}