import React, { useState } from 'react';

import { TextAreaContainer } from './style';

const INITIAL_HEIGHT = 20;

export const TextArea = (props: any) => {
  const [height, setHeight] = useState(INITIAL_HEIGHT);

  const handleInput = (event: any) => {
    let actualHeight: number = event.target.scrollHeight;
    const beforeHeight = height;
    if (event.target.value === '') {
      actualHeight = INITIAL_HEIGHT;
    }
    if (actualHeight !== beforeHeight) {
      setHeight(actualHeight);
    }
  }

  return (
    <TextAreaContainer
      name={props.name}
      className={props.className}
      onInput={handleInput}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      rows={1}
      style={{
        height:`${height}px`
      }}
    />
  );
};