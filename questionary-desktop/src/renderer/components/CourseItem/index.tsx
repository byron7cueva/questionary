import React, { useState } from 'react';

import { ItemContainer } from '../ItemContainer';
import { TextArea } from '../TextArea';
import { CourseOptions } from './style';

export const CourseItem = (props: any) => {
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

  return (
    <ItemContainer
      editing={editing}
      onClickEdit={hadleClickEdit}
      isEditable={props.isEditable}
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