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
    <Route exact path="/" component={Search} />
    <Route exact path="/courses" component={Courses} />
    <Route exact path="/courses/:idCourse" component={Course}/>
  </MemoryRouter>
);

export {App};