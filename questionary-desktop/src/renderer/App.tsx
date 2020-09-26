import './assets/css/index.css';
import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';

import { GlobalStyle } from './styles/global';
import {Subject} from './pages/Subject';

const App = (): JSX.Element => (
  <MemoryRouter>
    <GlobalStyle />
    <Route exact path='/' component={Subject}/>
  </MemoryRouter>
);

export {App};