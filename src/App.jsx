import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { GlobalStyles } from './style';

import { ColorProvider } from './context/ColorContext';
import Intro from './components/Intro';
import Base from './components/Layout';
import LoginModal from './components/LoginModal';

const AppProvider = ({ contexts, children }) =>
  contexts.reduce(
    (prev, context) =>
      React.createElement(context, {
        children: prev,
      }),
    children,
  );

const App = () => (
  <AppProvider contexts={[ColorProvider]}>
    <GlobalStyles />
    <BrowserRouter basename="/">
      <Switch>
        <Route path="/" component={Base} exact />
        <Route path="/intro" component={Intro} exact />
        <Route path="/modal" component={LoginModal} exact />
      </Switch>
    </BrowserRouter>
  </AppProvider>
);

export default App;
