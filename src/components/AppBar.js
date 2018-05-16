import React from 'react';
import { withRouter }    from 'react-router';
import { Link } from 'react-router-dom';
import authenticationContainer from './../containers/authenticationContainer';

class AppBar extends React.Component {
  constructor(props) {
    super(props);
  }

  authButton() {
    // change these names, too similar
    const { authenticated, authenticate } = this.props;
    if (authenticated) {
      return <button onClick={() => authenticate(false)}>Sign Out</button>;
    }
      return <button onClick={() => authenticate(true)}>Sign In</button>;
    }

  render() {
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resources">Resources</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users">Users</Link>
            </li>
            <li className="nav-item">
              {this.authButton()}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}


export default authenticationContainer(withRouter(AppBar));
