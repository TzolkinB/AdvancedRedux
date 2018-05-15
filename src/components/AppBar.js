import React from 'react';
import { Link } from 'react-router-dom';
//import authenticationContainer from './../containers/authenticationContainer';

class AppBar extends React.Component {
  constructor(props) {
    super(props);
  }

  authButton() {
    if (this.props.authenticated) {
      return <button onClick={() => this.props.authenticate(false)}>Sign Out</button>;
    }
      return <button onClick={() => this.props.authenticate(true)}>Sign In</button>;
    }

  render() {
    return(
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources">Resources</Link>
          </li>
          <li className="nav-item">
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    );
  }
}


export default AppBar;
          //<li className="nav-item">
          //  {this.authButton()}
          //</li>
