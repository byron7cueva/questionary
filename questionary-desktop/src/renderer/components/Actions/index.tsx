import React from 'react';
import { FiSave } from 'react-icons/fi';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

export const Actions = (props: any) => (
  <div className="question__actions">
    {
      props.editing && (
        <button className="btn btn-circle btn-cyan">
          <FiSave size={40} />
        </button>
      )
    }
    <button className={`btn btn-circle ${props.editing ? 'btn-red' : 'btn-cyan'}`} onClick={props.onClickEdit}>
      {
        props.editing ? <IoMdCloseCircleOutline size={40}/>
        : <TiEdit size={40} />
      }
    </button>
    {
      !props.editing && (
        <button className="btn btn-circle btn-red">
          <RiDeleteBin5Line size={40}/>
        </button>
      )
    }
  </div>
);