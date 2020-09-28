import React, { useState } from 'react';

import { TextArea } from '../TextArea';
import { ItemContainer } from '../ItemContainer';
import { Question } from '../../types/Question';

export interface QuestionItemProps {
  data: Question;
  isEditable?: boolean;
  editing?: boolean;
  onClickDelete?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onClickSave?: (question: Question) => void;
  onClickCancelEdit?: () => void;
}

export const QuestionItem = (props: QuestionItemProps): JSX.Element => {
  const isEditing = props.isEditable && props.editing;
  const [editing, setEditing] = useState(isEditing);
  const [questionEdit, setQuestionEdit] = useState(props.data.question);
  const [answereEdit, setAnswereEdit] = useState(props.data.answere);

  const handleClickEdit = () => {
    setEditing(true);
  }

  const handleClickCancelEdit = () => {
    setQuestionEdit(props.data.question);
    setAnswereEdit(props.data.answere);
    setEditing(false);
    if (props.onClickCancelEdit) {
      props.onClickCancelEdit();
    }
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
    setEditing(false);
  }

  return (
    <ItemContainer
      editing={editing}
      onClickEdit={handleClickEdit}
      isEditable={props.isEditable}
      onClickDelete={props.onClickDelete}
      onClickSave={handleClickSave}
      onClickCancelEdit={handleClickCancelEdit}
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