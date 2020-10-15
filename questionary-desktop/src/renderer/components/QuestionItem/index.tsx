import React, { useState } from 'react';
import { Question, QuestionCreate } from 'questionary-domain';

import { TextArea } from '../TextArea';
import { ItemContainer } from '../ItemContainer';

export interface QuestionItemProps {
  data: Question | QuestionCreate;
  isEditable?: boolean;
  editing?: boolean;
  onClickDelete?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onClickSave?: (question: Question | QuestionCreate) => void;
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

  const handleChangeEdit = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const { name, value } = event.target;
    switch (name) {
      case 'question': setQuestionEdit(value); break;
      case 'answere': setAnswereEdit(value); break;
    }
  }

  const handleClickSave = () => {
    const question: Question | QuestionCreate = {
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
          fontSize={14}
        />
    </ItemContainer>
  );
}