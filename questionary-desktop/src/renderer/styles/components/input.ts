import {css} from 'styled-components';

import { Colors } from '../../config/ui';

export const input = css`
  textarea {
    resize: none;
    display:block;
    width: 100%;
    outline: none;
    overflow: hidden;
    background-color: transparent;
    border: none;
    border-bottom: 0.1px dashed #6272a4;
    color: ${Colors.Light};
    padding: 0 0.5em;
  }
`;