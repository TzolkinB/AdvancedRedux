import React from 'react';
import { withRouter } from 'react-router';
import EditUser       from './EditUser';
import usersContainer from './../containers/usersContainer';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
    this.toggleEdit = this.toggleEdit.bind(this);

  }

  toggleEdit() {
    this.setState({isEditing: !this.state.isEditing})
  }

  render() {
    const {user, handleUpdateUser} = this.props;
    if(this.state.isEditing) {
      console.log(user.id, this.state.isEditing);
      return(
        <EditUser user={user} handleUpdateUser={handleUpdateUser} isEditing={this.state.isEditing} />
      );
    }
    return(
      <div className="card m-2" key={user.id}>
        <div className="card-body" key={user.id}>
          <h4 className="card-title">{user.name}</h4>
          <p className="card-text">{user.company.name}</p>
          <span className="badge badge-primary p-3">{user.email}</span>
          <button className="btn btn-info float-right" onClick={e => this.toggleEdit()}>Edit</button>
        </div>
      </div>
    );
  }
}

export default usersContainer(withRouter(User));
