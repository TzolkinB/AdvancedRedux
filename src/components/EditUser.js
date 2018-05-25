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
      <div className="card m-2" key={user.id}>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="userName">Name</label>
              <input 
                type="text"
                className="form-control"
                id="userName"
                name={user.name}
                value={user.name}
                placeholder="Jane Doe"
                onChange={e => handleChange(name, e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="companyName">Company</label>
              <input 
                type="text"
                className="form-control"
                id="companyName"
                name={user.company.name}
                value={user.company.name}
                placeholder="Company Name"
                onChange={e => handleChange(name, e.target.value)} />
            </div>
          </form>
          <button className="btn btn-primary">{user.email}</button>
        </div>
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
