import React from 'react';
import { withRouter }    from 'react-router';
import usersContainer from './../containers/usersContainer';

class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {handleUsers} = this.props;
    handleUsers();
  }

  renderUser(user) {
    return(
      <p>{user.county}</p>
    );
  }

  render() {
    return (
      <div className="user-list">
        {this.props.users.map(this.renderUser)}
      </div>
    );
  }
}


export default usersContainer(withRouter(UserList));
      //<div className="card card-block" key={user.id}>
      //  <h4 className="card-title">{user.name}</h4>
      //  <p className="card-text">{user.company.name}</p>
      //  <a className="btn btn-primary">{user.email}</a>
      //</div>
