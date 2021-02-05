import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginModal from './components/LoginModal';
import Intro from './components/Intro';
import Main from './containers/main';

const App = () => (
  <BrowserRouter basename="/">
    <Switch>
      <Route path="/" component={Intro} exact />
      <Route path="/main" component={Main} exact />
      <Route path="/modal" component={LoginModal} exact />
    </Switch>
  </BrowserRouter>
);

export default App;
