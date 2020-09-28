import React, { useState } from 'react';

import { TextArea } from '../TextArea';
import { ItemContainer } from '../ItemContainer';
import { Question } from '../../types/Question';

export interface QuestionItemProps {
  data: Question,
  isEditable?: boolean,
  onClickDelete?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onClickSave?: (question: Question) => void;
}

export const QuestionItem = (props: QuestionItemProps): JSX.Element => {
  const [editing, setEditing] = useState(false);
  const [questionEdit, setQuestionEdit] = useState(props.data.question);
  const [answereEdit, setAnswereEdit] = useState(props.data.answere);

  const handleClickEditable = () => {
    if (editing) {
      setQuestionEdit(props.data.question);
      setAnswereEdit(props.data.answere);
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

  const handleClickSave = () => {
    const question: Question = {
      ...props.data,
      question: questionEdit,
      answere: answereEdit
    };
    props.onClickSave(question);
  }

  return (
    <ItemContainer
      editing={editing}
      onClickEdit={handleClickEditable}
      isEditable={props.isEditable}
      onClickDelete={props.onClickDelete}
      onClickSave={handleClickSave}
    >
      <TextArea
          name="question"
          placeholder="Pregunta"
          value={questionEdit}
          onChange={handleChangeEdit}
          editing={editing}
          fontSize={16}
        />
        <TextArea
          name="answere"
          placeholder="Respuesta"
          value={answereEdit}
          onChange={handleChangeEdit}
          editing={editing}
          fontSize={13}
        />
    </ItemContainer>
  );
}