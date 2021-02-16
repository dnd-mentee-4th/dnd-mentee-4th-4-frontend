import React from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';

import Intro from './components/Intro';
import Base from './components/Layout';
import LoginModal from './components/LoginModal';
import MobileFavoriteBar from './components/MobileFavoriteBar';
import Contents from './components/Contents';

const Routes = () => (
  <Switch>
    <Route path="/intro" component={Intro} />
    <Route path="/modal" component={LoginModal} />
    <Base>
      <Redirect from="/" to="/ALL" />
      <Route path="/:brand" component={Contents} exact />
      <Route path="/mobile/favorite" component={MobileFavoriteBar} exact />
    </Base>
  </Switch>
);

export default withRouter(Routes);
