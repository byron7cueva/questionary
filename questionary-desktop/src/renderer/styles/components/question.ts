import { css } from 'styled-components';

import { Colors, FontSize } from '../../config/ui';

export const question = css`
  .question {
    margin-bottom: 1.5em;
    
    &__container {
      padding: 1em;
      border: 0.1px thick transparent;
      border-radius: 4px;
      background-color: ${Colors.Dark};
    }

    &:hover {
      & .question__container {
        border-color: ${Colors.Pink};
      }

      & .btn {
        visibility: initial;
      }
    }

    &__actions {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 2em;
      margin-top: 0.5em;

      & .btn {
        margin-left: 0.7em;
        visibility: hidden;
      }
    }

    &__answere {
      margin-top: 2em;
    }

    textarea.question__title {
      font-size: ${FontSize.h5};
      height: ${FontSize.h5};
      max-height: 5em;
      word-spacing: -0.3em;
    }
  }
`;