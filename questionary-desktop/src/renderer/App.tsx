import './assets/css/index.css';
import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';

import { GlobalStyle } from './styles/global';
import { CoursePage } from './pages/CoursePage';
import { Courses } from './pages/Courses';
import { Search } from './pages/Search';

const App = (): JSX.Element => (
  <MemoryRouter>
    <GlobalStyle />
    <Route exact path="/" component={Search} />
    <Route exact path="/courses" component={Courses} />
    <Route exact path="/courses/:courseId" component={CoursePage}/>
  </MemoryRouter>
);

export {App};