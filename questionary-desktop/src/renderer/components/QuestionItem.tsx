import React, { useState } from 'react';

import { Question } from '../types/Question';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { FiSave } from 'react-icons/fi';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { TextArea } from './TextArea';

export const QuestionItem = ({ question, answere}: Question): JSX.Element => {
  const [isEditable, setEditable] = useState(false);
  const [questionEdit, setQuestionEdit] = useState(question);
  const [answereEdit, setAnswereEdit] = useState(answere);

  const handleClickEditable = () => {
    if (!isEditable) {
      setQuestionEdit(question);
      setAnswereEdit(answere);
    }
    setEditable(!isEditable);
  }

  const handleChangeEdit = (event: any) => {
    const { name, value } = event.target;
    switch (name) {
      case 'question': setQuestionEdit(value); break;
      case 'answere': setAnswereEdit(value); break;
    }
  }

  return (
    <div className="question">
      <div className="question__container">
        {
          isEditable ? 
          (
            <div className="question--ediable">
              <TextArea
                name="question"
                className="question__title"
                placeholder="Pregunta"
                value={questionEdit}
                onChange={handleChangeEdit}
              />
              <TextArea
                name="answere"
                className="question__answere"
                placeholder="Respuesta"
                value={answereEdit}
                onChange={handleChangeEdit}
              />
            </div>
          ) :
          (
            <div className="question--read-only">
              <h5 className="question__title">
                {question}
              </h5>
              <div className="question__answere">
                {answere}
              </div>
            </div>
          )
        }
      </div>
      <div className="question__actions">
        {
          isEditable && (
            <button className="btn btn-circle btn-cyan">
              <FiSave size={40} />
            </button>
          )
        }
        <button className={`btn btn-circle ${isEditable ? 'btn-red' : 'btn-cyan'}`} onClick={handleClickEditable}>
          {
            isEditable ? <IoMdCloseCircleOutline size={40}/>
            : <TiEdit size={40} />
          }
        </button>
        {
          !isEditable && (
            <button className="btn btn-circle btn-red">
              <RiDeleteBin5Line size={40}/>
            </button>
          )
        }
      </div>
    </div>
  );
}