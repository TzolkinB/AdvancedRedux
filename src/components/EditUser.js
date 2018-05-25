import React from 'react';
import { withRouter }    from 'react-router';
import usersContainer from './../containers/usersContainer';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const {handleGetUsers} = this.props;
    handleGetUsers();
  }

  handleChange(e){
    console.log('here')
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
                onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="companyName">Company</label>
              <input 
                type="text"
                className="form-control"
                id="companyName"
                name={user.company.name}
                value={user.company.name}
                placeholder="Company Name" />
            </div>
          </form>
          <button className="btn btn-primary">{user.email}</button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="user-list">
        {this.props.users.map(this.renderUser)}
      </div>
    );
  }
}


export default usersContainer(withRouter(UserList));
