/* eslint-disable no-console */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './style';

import { ColorProvider } from './context/ColorContext';
import Intro from './components/Intro';
import Base from './components/Layout';

const App = () => (
  <ColorProvider>
    <GlobalStyles />
    <Base>
      <BrowserRouter basename="/">
        <Switch>
          <Route path="/intro" component={Intro} />
        </Switch>
      </BrowserRouter>
    </Base>
  </ColorProvider>
);

export default App;
