import { createGlobalStyle } from 'styled-components';

import { Colors, FontSize } from '../config/ui';
import { button } from './components/button';
import { input } from './components/input';

export const GlobalStyle = createGlobalStyle`

  body {
    background-color: ${Colors.Background};
    color: ${Colors.Light};
    font-size: ${FontSize.P};
  }

  ::-webkit-scrollbar-track
  {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: ${Colors.Background};
  }
  ::-webkit-scrollbar
  {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb
  {
    background-color: ${Colors.Pink};
    border: 3px solid ${Colors.Background};
    border-radius: 20px;
  }
  
  h1 {
    font-size: ${FontSize.h1};
  }

  h2 {
    font-size: ${FontSize.h2};
  }

  h5 {
    font-size: ${FontSize.h5};
    margin-bottom: 0.3em;
  }

  hr {
    border: none;
    border-bottom: 0.1px solid ${Colors.Comment};
    margin: 1.5em 0;
  }

  ${button}
  ${input}
`;