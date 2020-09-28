import React, { useState } from 'react';

import { ItemContainer } from '../ItemContainer';
import { TextArea } from '../TextArea';
import { CourseOptions } from './style';
import { Course } from '../../types/Course';

export interface CourseItemProps {
  data: Course;
  isEditable: boolean;
  onClickQuestionary: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onClickSave: (course: Course) => void;
  onClickDelete: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const CourseItem = (props: CourseItemProps) => {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(props.data.name);

  const hadleClickEdit = () => {
    if (editing) {
      setName(props.data.name);
    }
    
    setEditing(!editing);
  }

  const handleChange = (event: any) => {
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
  }

  return (
    <ItemContainer
      editing={editing}
      isEditable={props.isEditable}
      onClickEdit={hadleClickEdit}
      onClickSave={handleClickSave}
      onClickDelete={props.onClickDelete}
    >
      <TextArea
        name="name"
        value={name}
        placeholder="Curso"
        onChange={handleChange}
        editing={editing}
        fontSize={17}
      />
      <CourseOptions>
        <button
          className="btn btn-green"
          onClick={props.onClickQuestionary}
        >
          Cuestionario
        </button>
      </CourseOptions>
    </ItemContainer>
  );
}