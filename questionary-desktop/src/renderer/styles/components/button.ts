import { css } from 'styled-components';

import { Colors } from '../../config/ui';

export const button = css`
  .btn {
    padding: 0.4em 0.6em;
    font-weight: bold;
    outline: none;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    margin: 0 0.5em;

    &.btn-circle {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2em;
      height: 2em;
      padding: 0.2em;
      border-radius: 100%;
    }

    &.btn-red {
      background-color: ${Colors.Red};
      color: ${Colors.Light};
    }

    &.btn-cyan {
      background-color: ${Colors.Cyan};
      color: ${Colors.Dark};
    }

    &.btn-green {
      background-color: ${Colors.Green};
      color: ${Colors.Dark};
    }
  }
`;