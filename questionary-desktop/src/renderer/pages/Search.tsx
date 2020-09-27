import React from 'react';

import { Layout } from '../components/Layout';
import { Header } from '../components/Header';
import { SearchQuestion } from '../containers/SearchQuestion';
import { useMenuNavigate } from '../hooks/useMenuNavigate';

export const Search = () => {
  useMenuNavigate();
  
  return (
    <Layout>
      <Header
        subTitle="Buscar"
        title="Preguntas"
      />
      <SearchQuestion />
    </Layout>
  );
}