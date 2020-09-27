import React, { useState } from 'react';

import { Editable, ReadOnly } from './style';
import { FontSize } from '../../config/ui';

const INTERLINE = 6;

export const TextArea = (props: any) => {
  const size = props.fontSize ? props.fontSize : FontSize.P;
  const initialHeight = size + INTERLINE;
  const [height, setHeight] = useState(initialHeight);

  const handleInput = (event: any) => {
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
          className={props.className}
          onInput={handleInput}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          rows={1}
          style={{
            height:`${height}px`,
            fontSize: `${size}px`
          }}
        />
      ) : (
        <ReadOnly
          className={props.className}
          style={{
            height:`${height}px`,
            fontSize: `${size}px`
          }}
        >
          {props.value}
        </ReadOnly>
      )
    }
    </>
  );
};