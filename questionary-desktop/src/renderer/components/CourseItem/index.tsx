import React, { useState } from 'react';

import { ItemContainer } from '../ItemContainer';
import { TextArea } from '../TextArea';
import { CourseOptions } from './style';
import { Course } from '../../types/Course';

export interface CourseItemProps {
  data: Course;
  isEditable: boolean;
  editing?: boolean;
  hideOptionsCourse?: boolean;
  onClickQuestionary?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onClickSave?: (course: Course) => void;
  onClickDelete?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onClickCancelEdit?: () => void;
}

export const CourseItem = (props: CourseItemProps): JSX.Element => {
  const isEditing = props.isEditable && props.editing;
  const [editing, setEditing] = useState(isEditing);
  const [name, setName] = useState(props.data.name);

  const hadleClickEdit = () => {    
    setEditing(true);
  }

  const handleClickCancelEdit = () => {
    setEditing(false);
    setName(props.data.name);
    if (props.onClickCancelEdit) {
      props.onClickCancelEdit(); 
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const { name, value } = event.target;
    switch (name) {
      case 'name': setName(value); break;
    }
  }

  const handleClickSave = () => {
    const course: Course = {
      ...props.data,
      name
    };
    props.onClickSave(course);
    setEditing(false);
  }

  return (
    <ItemContainer
      editing={editing}
      isEditable={props.isEditable}
      onClickEdit={hadleClickEdit}
      onClickSave={handleClickSave}
      onClickDelete={props.onClickDelete}
      onClickCancelEdit={handleClickCancelEdit}
    >
      <TextArea
        name="name"
        value={name}
        placeholder="Curso"
        onChange={handleChange}
        editing={editing}
        fontSize={17}
      />
      {
        !props.hideOptionsCourse && (
          <CourseOptions>
            <button
              className="btn btn-green"
              onClick={props.onClickQuestionary}
            >
              Cuestionario
            </button>
          </CourseOptions>   
        )
      }
    </ItemContainer>
  );
}