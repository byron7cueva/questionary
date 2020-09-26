import styled from 'styled-components';

import { Colors, FontSize } from '../../config/ui';

export const QuestionItemContainer = styled.div`
  margin-bottom: 1.5em;

  &:hover {
    .question__container {
      border-color: ${Colors.Pink};
    }

    .question__actions {
      visibility: initial;
    }
  }

  
  .question__container {
    padding: 1em;
    border: 0.1px solid transparent;
    border-radius: 4px;
    background-color: ${Colors.Dark};
  }

  .question__actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 2em;
    margin-top: 0.5em;
    visibility: hidden;

    & .btn {
      margin-left: 0.7em;
    }
  }

  .question__answere {
    margin-top: 2em;
  }

  textarea.question__title {
    font-size: ${FontSize.h5};
    height: ${FontSize.h5};
    max-height: 5em;
    word-spacing: -0.3em;
  }
`;