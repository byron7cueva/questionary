import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';

import {Subject} from './pages/Subject';

const App = (): JSX.Element => (
  <MemoryRouter>
    <Route exact path='/' component={Subject}/>
  </MemoryRouter>
);

export {App};