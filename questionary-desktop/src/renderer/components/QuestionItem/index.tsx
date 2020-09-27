import React, { useState } from 'react';

import { TextArea } from '../TextArea';
import { ItemContainer } from '../ItemContainer';
import { Question } from '../../types/Question';

export interface QuestionItemProps {
  data: Question,
  isEditable?: boolean
}

export const QuestionItem = ({data: {question, answere}, isEditable}: QuestionItemProps): JSX.Element => {
  const [editing, setEditing] = useState(false);
  const [questionEdit, setQuestionEdit] = useState(question);
  const [answereEdit, setAnswereEdit] = useState(answere);

  const handleClickEditable = () => {
    if (editing) {
      setQuestionEdit(question);
      setAnswereEdit(answere);
    }
    setEditing(!editing);
  }

  const handleChangeEdit = (event: any) => {
    const { name, value } = event.target;
    switch (name) {
      case 'question': setQuestionEdit(value); break;
      case 'answere': setAnswereEdit(value); break;
    }
  }

  return (
    <ItemContainer
      editing={editing}
      onClickEdit={handleClickEditable}
      isEditable={isEditable}
    >
      <TextArea
          name="question"
          className="question__title"
          placeholder="Pregunta"
          value={questionEdit}
          onChange={handleChangeEdit}
          editing={editing}
          fontSize={16}
        />
        <TextArea
          name="answere"
          className="question__answere"
          placeholder="Respuesta"
          value={answereEdit}
          onChange={handleChangeEdit}
          editing={editing}
          fontSize={13}
        />
    </ItemContainer>
  );
}