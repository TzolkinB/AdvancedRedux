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

  handleChange(key, e) {
    this.setState({ [key]: e.target.value})
  };


  render() {
    console.log('state', this.state);
    const {users, handleUpdateUser, handleAddUser} = this.props;

    const handleSave = () => {
      handleAddUser(this.state);
      $('#addUserModal').modal('hide')
    };

    return (
      <div>
        <div className="row d-flex justify-content-end">
          <button type="button" className="btn btn-primary float-right px-5" data-toggle="modal" data-target="#addUserModal">
            Add User
          </button>
        </div>
        <div className="user-list">
          {users.all.map(user => {
            return(
              <User key={user.id} users={users} user={user} handleUpdateUser={handleUpdateUser} />
            );
          })}
        </div>
        <div className="modal fade" id="addUserModal" tabIndex="-1" role="dialog" aria-labelledby="addUser" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addUser">Add User</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                    <form>
                      <div className="form-group">
                        <label htmlFor="userName">Name</label>
                        <input 
                          type="text"
                          className="form-control"
                          id="userName"
                          value={this.props.name}
                          placeholder="Jane Doe"
                          onChange={ e => this.handleChange('name', e)} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="companyName">Company</label>
                        <input 
                          type="text"
                          className="form-control"
                          id="companyName"
                          value={this.props.company}
                          placeholder="Company Name"
                          onChange={e => this.handleChange('company', e)} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="companyName">Email</label>
                        <input 
                          type="text"
                          className="form-control"
                          id="email"
                          value={this.props.email}
                          placeholder="example@example.com"
                          onChange={e => this.handleChange('email', e)} />
                      </div>
                    </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-success" onClick={handleSave}>Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default usersContainer(withRouter(UserList));
