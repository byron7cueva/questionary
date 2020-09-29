import React, { useState } from 'react';

import { Editable, ReadOnly } from './style';

const INTERLINE = 6;

export interface TextAreaProps {
  fontSize: number;
  editing: boolean;
  name: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea = (props: TextAreaProps): JSX.Element => {
  const initialHeight = props.fontSize + INTERLINE;
  const [height, setHeight] = useState(initialHeight);

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    let actualHeight: number = event.target.scrollHeight;
    const beforeHeight = height;
    if (event.target.value === '') {
      actualHeight = initialHeight;
    }
    if (actualHeight !== beforeHeight) {
      setHeight(actualHeight);
    }
  }

  return (
    <>
    {
      props.editing ? (
        <Editable
          name={props.name}
          onInput={handleInput}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          rows={1}
          style={{
            height:`${height}px`,
            fontSize: `${props.fontSize}px`
          }}
        />
      ) : (
        <ReadOnly
          style={{
            height:`${height}px`,
            fontSize: `${props.fontSize}px`
          }}
        >
          {props.value}
        </ReadOnly>
      )
    }
    </>
  );
};