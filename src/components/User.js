import React from 'react';
import activeUserContainer from './../containers/activeUserContainer';

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('props', this.props);
    const {user} = this.props;
    return(
      <div className="card m-2" key={user.id}>
        <div className="card-body" key={user.id}>
          <h4 className="card-title">{user.name}</h4>
          <p className="card-text">{user.company.name}</p>
          <button className="btn btn-primary">{user.email}</button>
          <button className="btn btn-info" onClick={e => this.props.handleEditUser(user.id)}>Edit</button>
        </div>
      </div>
    );
  }
}

export default User;
