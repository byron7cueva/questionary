import styled from 'styled-components';

import { Colors } from '../../config/ui';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
`;

export const ModalContainer = styled.div`
  padding: 1em;
  border: 2px solid #444;
  background-color: ${Colors.Background};
  width: 30em;

  .modal__buttons {
    display: flex;
    justify-content: center;
  }
`;