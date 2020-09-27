import {css} from 'styled-components';

import { Colors } from '../../config/ui';

export const input = css`
  textarea, input {
    display:block;
    width: 100%;
    outline: none;
    background-color: transparent;
    color: ${Colors.Light};
  }

  input {
    padding: 0.5em 1em;
    border: 1px solid ${Colors.Purple};
    border-radius: 8px;
  }
`;