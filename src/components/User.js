import React          from 'react';
import { withRouter } from 'react-router';
import merge          from 'lodash.merge';
import usersContainer from './../containers/usersContainer';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleEdit(user) {
    console.log('k', user);
    this.setState({
      isEditing: true,
      user
    })
  };

  createDeepStateSlice(field, value) {
    console.log('value', value);
    return (
      field.split(',').slice().reverse().reduce((acc, key, i) => {
        return i === 0 ? { [key]: value } : { [key]: acc }
    }, {})
    );
  };

  handleChange(e) {
    const field = e.target.name;
    const value = e.target.value;
    const user = this.state.user;
    
    if (field.split(',').length === 2) {
      const slice = this.createDeepStateSlice(field, value);
      console.log('slice', slice); //returns what we want {company: {name: ""}}
    
      //console.log('k', user.company.name);
      //const that = merge({}, this.state, {user: slice});
      console.log('here', merge({}, this.state, slice));
      console.log('here2', merge({}, this.state.user, slice));
      this.setState(merge({}, this.state.user, slice));
    } else {
      user[field] = value;
      this.setState({user: user});
    }
    console.log('test', this.state);
  };

  render() {
    console.log('l', this.state);
    const {
      user, handleUpdateUser, handleDeleteUser,
      handleEditUser, users
    } = this.props;

    const handleDelete = user => {
      handleDeleteUser(user);
    }
  
    const handleUpdate = e => {
      e.preventDefault();
      console.log('state', this.state); //shows updated company.name but doesn't change in card view
      handleEditUser(this.state);
      this.setState({isEditing: false});
    }

    if(this.state.isEditing) {
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
                  name="name"
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
                  name={['company,name']}
                  value={user.company.name}
                  placeholder="Company Name"
                  onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  value={user.email}
                  placeholder="Email"
                  onChange={this.handleChange} />
              </div>
            </form>
            <button className="btn btn-info btn-raised float-right" onClick={handleUpdate}>Update</button>
          </div>
        </div>
      );
    }
    return(
      <div className="card m-2" key={user.id}>
        <div className="card-body" key={user.id}>
          <h4 className="card-title text-warning font-weight-bold">{user.name}</h4>
          <p>Company:&nbsp;
            <span className="text-secondary">{user.company ? user.company.name : ''}</span>
          </p>
          <p>Email:&nbsp;
            <span className="text-secondary">{user.email}</span>
          </p>
          <button className="btn btn-raised btn-info float-right" onClick={e => this.toggleEdit(user)}>Edit</button>
          <button className="btn btn-raised btn-danger float-right mr-2" onClick={e => handleDeleteUser(user)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default usersContainer(withRouter(User));
