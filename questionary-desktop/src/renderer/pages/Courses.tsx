import React from 'react';

import { Layout } from '../components/Layout';
import { Header } from '../components/Header';
import { CoursesList } from '../containers/CoursesList';
import { useMenuNavigate } from '../hooks/useMenuNavigate';

const Courses = () => {
  useMenuNavigate();
  
  return (
    <Layout>
      <Header
        title="Listado de materias"
        subTitle="Materias"
      />
      <CoursesList />
    </Layout>
  );
}

export {
  Courses
}