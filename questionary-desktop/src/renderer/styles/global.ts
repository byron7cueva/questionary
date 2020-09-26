import { createGlobalStyle } from 'styled-components';

import { Colors, FontSize } from '../config/ui';
import { button } from './components/button';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${Colors.Background};
    color: ${Colors.Light};
    font-size: ${FontSize.P};
  }

  h1, h2, h3, h4, h5 {
    margin: 0;
  }

  h1 {
    font-size: ${FontSize.h1};
    margin-bottom: 1em;
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
`;