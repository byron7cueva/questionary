import React from 'react';

import { Layout } from '../components/Layout';
import { Header } from '../components/Header';
import { SearchQuestion } from '../containers/SearchQuestion';

export const Search = () => (
  <Layout>
    <Header
      subTitle="Buscar"
      title="Preguntas"
    />
    <SearchQuestion />
  </Layout>
);