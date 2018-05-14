import React             from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render }        from 'react-dom';
import { Provider }      from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {
  Route, Switch } from 'react-router';

import requireAuth from './components/require_authentication';
import App         from './components/app';
import Resources   from './components/resources';
import reducers    from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter basename="/">
      <App>
        <Switch>
          <Route path="/resources" component={requireAuth(Resources)} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
