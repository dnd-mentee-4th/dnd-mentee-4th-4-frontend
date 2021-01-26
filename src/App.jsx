import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './containers/main';

const App = () => (
  <BrowserRouter basename="/">
    <Switch>
      <Route path="/" component={Main} exact />
    </Switch>
  </BrowserRouter>
);

export default App;
