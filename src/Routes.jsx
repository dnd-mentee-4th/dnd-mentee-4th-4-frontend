import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import Intro from './components/Intro';
import Base from './components/Layout';
import LoginModal from './components/LoginModal';
import CardList from './components/CardList';

const Routes = () => (
  <Switch>
    <Route path="/intro" component={Intro} exact />
    <Route path="/modal" component={LoginModal} />
    <Base>
      <Route path="/:brand" component={CardList} exact />
    </Base>
  </Switch>
);

export default withRouter(Routes);
