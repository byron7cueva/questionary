import React from 'react';

import { HeaderContainer } from './style';

export interface HeaderProps {
  title: string;
  subTitle: string;
  children?: any;
}

export const Header = (props: HeaderProps) => (
  <HeaderContainer>
    <header>
      <h3>{props.subTitle}</h3>
      <h1>{props.title}</h1>
    </header>
    {props.children}
  </HeaderContainer>
);