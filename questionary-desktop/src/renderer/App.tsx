import './assets/css/index.css';
import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';

import { GlobalStyle } from './styles/global';
import { Questionary } from './pages/Questionary';

const App = (): JSX.Element => (
  <MemoryRouter>
    <GlobalStyle />
    <Route exact path='/' component={Questionary}/>
  </MemoryRouter>
);

export {App};