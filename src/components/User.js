import React from 'react';

class User extends React.Component {
  render() {
    const {user, editingUser} = this.props;

    const isEditing = () => {
      console.log('click');
    }
    return(
        <div className="card-body" key={user.id}>
          <h4 className="card-title">{user.name}</h4>
          <p className="card-text">{user.company.name}</p>
          <button className="btn btn-primary">{user.email}</button>
          <button className="btn btn-info" onClick={isEditing}>Edit</button>
        </div>
    );
  }
}

export default User;
