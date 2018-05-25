import React          from 'react';
import { withRouter } from 'react-router';
import EditUser       from './EditUser';
import User           from './User';
import usersContainer from './../containers/usersContainer';

class UserList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editingUser: false
    }
  }

  componentDidMount() {
    const {handleGetUsers} = this.props;
    handleGetUsers();
  };

  render() {
    const {editingUser} = this.state;
    return (
      <div className="user-list">
        {this.props.users.map(user => (
          <div className="card m-2" key={user.id}>
            {user.editingUser ? <EditUser user={user} /> : <User user={user} editingUser={editingUser} />}
          </div>
        ))}
      </div>
    );
  }
}


export default usersContainer(withRouter(UserList));
