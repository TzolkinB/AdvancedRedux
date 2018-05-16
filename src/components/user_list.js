import React from 'react';
import { withRouter }    from 'react-router';
import usersContainer from './../containers/usersContainer';

class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {handleGetUsers} = this.props;
    handleGetUsers();
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
    console.log('props', this.props);
    return (
      <div className="user-list">
        {this.props.users.map(this.renderUser)}
      </div>
    );
  }
}


export default usersContainer(withRouter(UserList));
