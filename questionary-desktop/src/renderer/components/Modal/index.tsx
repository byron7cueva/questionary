import React from 'react';
import { useHistory } from 'react-router-dom';

import { Overlay, ModalContainer } from './style';

interface ModalProps {
  children: JSX.Element;
  onClickSave: () => void;
}

export const Modal = (props: ModalProps): JSX.Element => {
  const history = useHistory();

  const clickCancelHandler = () => {
    history.goBack();
  };

  const clickSaveHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onClickSave();
  }

  return (
    <Overlay>
      <ModalContainer>
        <form onSubmit={clickSaveHandler}>
          <div>
            { props.children }
          </div>
          <div className="modal__buttons">
            <button
              className="btn btn-green"
              type="submit"
            >
              Guardar
            </button>
            <button
              className="btn btn-red"
              type="button"
              onClick={clickCancelHandler}
            >
              Cancel
            </button>
          </div>
        </form>
      </ModalContainer>
    </Overlay>
  );
}