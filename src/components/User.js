import React from 'react';
import { withRouter } from 'react-router';
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


      //return state.map( user => user.id === action.id ? {...user, editing:!user.editing}:user)

  render() {
    console.log('props', this.props);
    const {users, user, handleUpdateUser} = this.props;
    if(this.state.isEditing) {
      console.log('editing', user.id);
    }
    return(
      <div className="card m-2" key={user.id}>
        <div className="card-body" key={user.id}>
          <h4 className="card-title">{user.name}</h4>
          <p className="card-text">{user.company.name}</p>
          <button className="btn btn-primary">{user.email}</button>
          <button className="btn btn-info" onClick={e => this.toggleEdit()}>Edit</button>
        </div>
      </div>
    );
  }
}

export default usersContainer(withRouter(User));
