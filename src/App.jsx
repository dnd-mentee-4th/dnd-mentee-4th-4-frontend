/* eslint-disable react/no-children-prop */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { GlobalStyles } from './style';

import { ColorProvider } from './context/ColorContext';
import Intro from './components/Intro';
import Base from './components/Layout';

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
    <Base>
      <BrowserRouter basename="/">
        <Switch>
          <Route path="/intro" component={Intro} />
        </Switch>
      </BrowserRouter>
    </Base>
  </AppProvider>
);

export default App;
