import React          from 'react';
import { withRouter } from 'react-router';
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
    const {users, handleUpdateUser} = this.props;
    return (
      <div className="user-list">
        {users.all.map(user => {
          return(
            <User users={users} user={user} handleUpdateUser={handleUpdateUser} />
          );
        })}
      </div>
    );
  }
}


export default usersContainer(withRouter(UserList));
