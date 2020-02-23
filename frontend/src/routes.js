
import React from 'react';
import { HashRouter, BrowserRouter, Router, Route, Switch, Link } from 'react-router-dom';
import LoginView from './components/Login/Login_View';
import AddView from './components/CreateList/Add_View'
import RegisterView from './components/CreateAccount/Create_View';

const Root = () => (

  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={LoginView} />
      <Route exact path='/Register' component={RegisterView} />
        <Route exact path='/create_todo/:userId' component={AddView} />
    </Switch>
  </BrowserRouter >
);
export default Root;
