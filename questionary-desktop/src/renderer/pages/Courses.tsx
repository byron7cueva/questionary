import React from 'react';

import { Layout } from '../components/Layout';
import { Header } from '../components/Header';
import { CoursesList } from '../containers/CoursesList';
import { useMenuNavigate } from '../hooks/useMenuNavigate';

const Courses = (): JSX.Element => {
  useMenuNavigate();
  
  return (
    <Layout>
      <Header
        title="Curses list"
        subTitle="Curses"
      />
      <CoursesList />
    </Layout>
  );
}

export {
  Courses
}