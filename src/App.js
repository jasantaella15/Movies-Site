import React from 'react';
import { Route, Switch, NavLink} from 'react-router-dom';
import Routes from './Routes';
import * as theme from './components/theme';
import {ThemeProvider} from 'styled-components'
import NavBar from './components/organisms/navBar';


export default props => {
  return (
    <ThemeProvider theme = {theme}>
    <div>
      <NavBar></NavBar>
      <Switch>
        {Routes.map((route, i) => <Route key={i} {...route} />)}    
      </Switch>
    </div>
    </ThemeProvider>
  );
};