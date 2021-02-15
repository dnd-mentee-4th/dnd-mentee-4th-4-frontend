import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import Intro from './components/Intro';
import Base from './components/Layout';
import LoginModal from './components/LoginModal';
import Contents from './components/Contents';

const Routes = () => (
  <Switch>
    <Route path="/intro" component={Intro} />
    <Route path="/modal" component={LoginModal} />
    <Base>
      <Route path="/:brand" component={Contents} />
    </Base>
  </Switch>
);

export default withRouter(Routes);
