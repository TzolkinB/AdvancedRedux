import React             from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render }        from 'react-dom';
import { Provider }      from 'react-redux';
import {
  Route, Switch } from 'react-router';

import requireAuth from './components/require_authentication';
import Header         from './components/header';
import Resources   from './components/resources';
import UserList    from './components/user_list';
import store from './redux/store';


render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <Header>
        <Switch>
          <Route path="/resources" component={requireAuth(Resources)} />
          <Route path="/users" component={UserList} />
        </Switch>
      </Header>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
