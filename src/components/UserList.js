import React          from 'react';
import { withRouter } from 'react-router';
import merge          from 'lodash.merge';
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

  handleChange(key, e, type) {
    //There must be a better way than passing a string to check against
    if(type != 'obj') {
      return this.setState({ [key]: e.target.value});
    }
    //Find out how to not hardcode "company"
    console.log('an object', key);
    return this.setState({ company: {[key]: e.target.value }});
  };

  createDeepStateSlice(keys, value) {
    return keys.slice().reverse().reduce((acc, key, i) => {
      return i === 0 ? { [key]: value } : { [key]: acc }
    }, {});
  }

  handleChangeFactory(keys) {
    const handleChange = (e) => {
      const value = e.target.value;

      if (Array.isArray(keys)) {
        const slice = this.createDeepStateSlice(keys, value);
        this.setState(merge({}, this.state, slice));
      } else {
        this.setState({ [keys]: value });
      }
      console.log(this.state); // for double checking with :eyes:
    }

    return handleChange.bind(this);
  }

  render() {
    const {
      users: {users}, handleUpdateUser, handleAddUser,
      clearUser, company
    } = this.props;

    const handleSave = e => {
      e.preventDefault();
      handleAddUser(this.state);
      $('#addUserModal').modal('hide');
    };

    const handleNameChange = this.handleChangeFactory('name');
    const handleCompanyChange = this.handleChangeFactory(['company', 'name']);

    return (
      <div>
        <div className="row d-flex justify-content-end my-3 mr-4">
          <button 
            type="button"
            className="btn btn-raised btn-success btn-lg px-5"
            data-toggle="modal" 
            data-target="#addUserModal">
            Add User
          </button>
        </div>
        <div className="user-list">
          {users.map(user => {
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
                      onChange={handleNameChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="companyName">Company</label>
                    <input 
                      type="text"
                      className="form-control"
                      id="companyName"
                      value={company}
                      placeholder="Company Name"
                      onChange={handleCompanyChange} />
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
                <button type="button" className="btn btn-raised btn-success" onClick={handleSave}>Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default usersContainer(withRouter(UserList));
