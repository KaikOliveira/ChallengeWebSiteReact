import React from 'react';
import { Header } from '../../components/Header';

import { Wrapper, Container } from './styles';

export const HomePage: React.FC = () => (
  <Wrapper>
    <Header />
    <h1>home</h1>
    <Container />
  </Wrapper>
);
