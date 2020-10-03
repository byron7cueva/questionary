import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 7em 5em 1fr;
  grid-template-areas: 'header'
                       'options'
                       'section';
`;

export const Options = styled.div`
  display: flex;
  grid-area: options;
  align-items: center;
  min-width: 36rem;
  margin: 0 auto;
`;

export const Container = styled.section`
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0 0.5em;
  height: 97%;
`;