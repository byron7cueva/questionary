import './assets/css/index.css';
import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';

import { GlobalStyle } from './styles/global';
import { Course } from './pages/Course';
import { Courses } from './pages/Courses';
import { Search } from './pages/Search';

const App = (): JSX.Element => (
  <MemoryRouter>
    <GlobalStyle />
    <Route exact path="/course" component={Search} />
    <Route exact path="/" component={Courses} />
    <Route exact path="/asas" component={Course}/>
  </MemoryRouter>
);

export {App};