import React, { useState } from 'react';

import { TextArea } from '../TextArea';
import { ItemContainer } from '../ItemContainer';

export const QuestionItem = (props: any): JSX.Element => {
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

  return (
    <ItemContainer
      editing={editing}
      onClickEdit={handleClickEditable}
      isEditable={props.isEditable}
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