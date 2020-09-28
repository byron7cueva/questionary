import React from 'react';

import { Container, Item } from './style';
import { Actions } from '../Actions';

export interface ItemContainerProps {
  editing: boolean;
  children: any;
  isEditable: boolean;
  onClickEdit?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onClickSave?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onClickDelete?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const ItemContainer = (props: ItemContainerProps) => (
  <Item className={`${props.editing ? 'isEdit' : ''}`}>
    <Container className="item__container">
      {props.children}
    </Container>
    {
      props.isEditable && (
        <Actions
          editing={props.editing}
          className="item__actions"
          onClickEdit={props.onClickEdit}
          onClickSave={props.onClickSave}
          onClickDelete={props.onClickDelete}
        />
      )
    }
  </Item>
);