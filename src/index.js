import React             from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render }        from 'react-dom';
import { Provider }      from 'react-redux';
import {
  Route, Switch, Redirect
} from 'react-router';

import store from './redux/store';
import './css/style.css';

import requireAuth from './components/require_authentication';
import AppBar      from './components/AppBar';
import Growl       from './components/Growl';
import Dashboard   from './components/Dashboard';
import Resources   from './components/resources';
import UserList    from './components/user_list';
import EditUser    from './components/EditUser';

const App = () => (
  <div className="container-fluid">
    <header className="fixed-top">
      <AppBar />
    </header>
    <main className="container-fluid main-vertical-padding">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/resources" component={requireAuth(Resources)} />
        <Route path="/users" component={requireAuth(EditUser)} />
      </Switch>
    </main>
    <Growl />
  </div>
)

render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('container'));
