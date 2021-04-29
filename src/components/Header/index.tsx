import React from 'react';
import logo from '../../assets/logo.png';
import Input from '../Input';

import { Wrapper, Content, Buttons } from './styles';

export const Header: React.FC = () => (
  <Wrapper>
    <Content>
      <img src={logo} alt="logo" />

      <Input name="search" placeholder="search" />

      <Buttons>
        <div />
        <div />
      </Buttons>
    </Content>
  </Wrapper>
);
