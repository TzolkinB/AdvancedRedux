import React             from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render }        from 'react-dom';
import { Provider }      from 'react-redux';
import {
  Route, Switch } from 'react-router';

import requireAuth from './components/require_authentication';
import App         from './components/app';
import Resources   from './components/resources';
import UserList    from './components/user_list';
import Async       from './middlewares/async';
import store from './redux/store';


render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <App>
        <Switch>
          <Route path="/resources" component={requireAuth(Resources)} />
          <Route path="/users" component={UserList} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
