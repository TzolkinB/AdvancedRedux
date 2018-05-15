import React from 'react';
import usersContainer from './../containers/usersContainer';

class UserList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const {fetchUsers} = this.props;
    console.log('willmount', fetchUsers);
    fetchUsers();
  }

  renderUser(user) {
    return(
      <div className="card card-block" key={user.id}>
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">{user.company.name}</p>
        <a className="btn btn-primary">{user.email}</a>
      </div>
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


export default UserList;
