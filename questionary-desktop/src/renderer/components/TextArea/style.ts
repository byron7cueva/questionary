import styled, { css } from 'styled-components';

import { Colors } from '../../config/ui';

const baseInput = css`
    display:block;
    width: 100%;
    margin-bottom: 1em;
    background-color: transparent;
    border: none;
    border-bottom: 0.1px dashed transparent;
    padding: 0;
`;

export const Editable = styled.textarea`
    ${baseInput}
    resize: none;
    overflow: hidden;
    border-color: #6272a4;
    color: ${Colors.Light};
`;

export const ReadOnly = styled.p`
    ${baseInput}
`