import React          from 'react';
import { withRouter } from 'react-router';
import EditUser       from './EditUser';
import User           from './User';
import usersContainer from './../containers/usersContainer';

class UserList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const {handleGetUsers} = this.props;
    handleGetUsers();
  };


  render() {
    const {users} = this.props;
    return (
      <div className="user-list">
        {users.map(user => {
          return(
            <User user={user} />
          );
        })}
      </div>
    );
  }
}


export default usersContainer(withRouter(UserList));
            //{user.editingUser ? <EditUser user={user} /> : <User user={user} 
