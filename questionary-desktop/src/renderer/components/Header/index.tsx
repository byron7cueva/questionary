import React from 'react';

import { HeaderContainer } from './style';

export interface HeaderProps {
  title: string;
  subTitle: string;
  children?: JSX.Element;
}

export const Header = (props: HeaderProps): JSX.Element => (
  <HeaderContainer>
    <header>
      <h3>{props.subTitle}</h3>
      <h1>{props.title}</h1>
    </header>
    {props.children}
  </HeaderContainer>
);