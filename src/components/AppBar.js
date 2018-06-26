import React          from 'react';
import { withRouter } from 'react-router';
import { Link }       from 'react-router-dom';
import authenticationContainer from './../containers/authenticationContainer';

class AppBar extends React.Component {
  constructor(props) {
    super(props);
  }

  authButton() {
    // change these names, too similar
    const { authenticated, authenticate } = this.props;
    if (authenticated) {
      return <button className="btn btn-raised btn-danger" onClick={() => authenticate(false)}>Sign Out</button>;
    }
      return <button className="btn btn-raised btn-primary" onClick={() => authenticate(true)}>Sign In</button>;
    }

  render() {
    return(
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button 
          type="button"
          className="navbar-toggler"
          data-toggle="collapse" 
          data-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
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
          </ul>
          <span className="navbar-text">
              {this.authButton()}
          </span>
        </div>
      </nav>
    );
  }
}


export default authenticationContainer(withRouter(AppBar));
