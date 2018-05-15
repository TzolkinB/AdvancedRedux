import React from 'react';
import usersContainer from './../containers/usersContainer';

class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('willmount', this.props);
    const {handleUsers} = this.props;
    handleUsers();
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
    console.log(this.props);
    return (
      <div className="user-list">
        <p>List goes here</p>
      </div>
    );
  }
}


export default UserList;
        //{this.props.users.map(this.renderUser)}
