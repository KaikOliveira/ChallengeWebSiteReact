import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from './HomePage';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />

  </Switch>
);
