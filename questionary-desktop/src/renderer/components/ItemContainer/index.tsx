import React from 'react';

import { Container, Item } from './style';
import { Actions } from '../Actions';

export const ItemContainer = (props: any) => (
  <Item className={`${props.editing ? 'isEdit' : ''}`}>
    <Container className="item__container">
      {props.children}
    </Container>
    {
      props.isEditable && (
        <Actions
          editing={props.editing}
          onClickEdit={props.onClickEdit}
          className="item__actions"
        />
      )
    }
  </Item>
);