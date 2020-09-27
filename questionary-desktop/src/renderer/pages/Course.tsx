import React from 'react';

import { Layout } from '../components/Layout';
import { Header } from '../components/Header';
import { Questions } from '../containers/Questions';
import { useMenuNavigate } from '../hooks/useMenuNavigate';

const Course = (): JSX.Element => {
  useMenuNavigate();
  
  return (
    <Layout>
      <Header
        title="Nombre de la materia"
        subTitle="Cuestionario"
      />
      <Questions />
    </Layout>
  );
}

export {
  Course
}