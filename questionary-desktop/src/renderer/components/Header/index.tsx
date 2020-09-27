import React from 'react';

import { HeaderContainer } from './style';

export const Header = (props: any) => (
  <HeaderContainer>
    <header>
      <h3>{props.subTitle}</h3>
      <h1>{props.title}</h1>
    </header>
    {props.children}
  </HeaderContainer>
);