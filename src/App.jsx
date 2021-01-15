import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './containers/home';

const App = () => (
  <BrowserRouter basename="/">
    <Switch>
      <Route path="/" component={Home} exact />
    </Switch>
  </BrowserRouter>
);

export default App;
