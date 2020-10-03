import styled from 'styled-components';

import { Colors } from '../../config/ui';

export const Item = styled.article`
  max-width: 36rem;
  margin: 0 auto;
  margin-bottom: 1.5em;

  &:hover {
    .item__container {
      border-color: ${Colors.Pink};
    }

    .item__actions {
      visibility: initial;
    }
  }

  &.isEdit {
    .item__actions {
      visibility: initial;
    }
  }

  .item__actions {
    visibility: hidden;
  }

`

export const Container = styled.div`
  padding: 1em;
  border: 0.1px solid transparent;
  border-radius: 4px;
  background-color: ${Colors.Dark};
`;