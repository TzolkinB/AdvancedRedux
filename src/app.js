import React        from 'react';
import { render }   from 'react-dom';
import { Provider } from 'react-redux';
import firebase     from './firebase';
import {
  BrowserRouter, Route, Switch,
  Redirect
} from 'react-router-dom';

import store from './redux/store';
import 'CSS/style.css';

import requireAuth from './components/require_authentication';
import AppBar      from './components/AppBar';
import Growl       from './components/Growl';
import Dashboard   from './components/Dashboard';
import Resources   from './components/resources';
import UserList    from './components/UserList';
import Footer      from './components/Footer';

const App = () => (
  <div className="container-fluid">
    <header className="fixed-top">
      <AppBar />
    </header>
    <main className="container-fluid main-vertical-padding">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/resources" component={Resources} />
        <Route path="/users" component={requireAuth(UserList)} />
      </Switch>
    </main>
    <Growl />
    <Footer />
  </div>
)

render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('redux-app'));
