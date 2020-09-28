import React from 'react';
import { FiSave } from 'react-icons/fi';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

import { ActionsContainer } from './style';

export interface ActionsProps {
  className: string;
  editing: boolean;
  onClickEdit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onClickSave: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onClickDelete: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onClickCancelEdit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Actions = (props: ActionsProps) => (
  <ActionsContainer className={props.className}>
    {
      props.editing ? (
        <>
          <button className="btn btn-circle btn-cyan" onClick={props.onClickSave}>
            <FiSave size={40} />
          </button>
          <button className="btn btn-circle btn-red" onClick={props.onClickCancelEdit}>
            <IoMdCloseCircleOutline size={40}/>
          </button>
        </>
      ) : (
        <>
          <button className="btn btn-circle btn-cyan" onClick={props.onClickEdit}>
            <TiEdit size={40} />
          </button>
          <button className="btn btn-circle btn-red" onClick={props.onClickDelete}>
            <RiDeleteBin5Line size={40}/>
          </button>
        </>
      )
    }
  </ActionsContainer>
);