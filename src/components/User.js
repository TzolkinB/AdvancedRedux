import React          from 'react';
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

  toggleEdit(user) {
    this.setState({
      isEditing: true,
      user: user
    })
  }

  render() {
    const {
      user, handleUpdateUser, handleDeleteUser,
      handleEditUser, users
    } = this.props;

    const handleDelete = user => {
      handleDeleteUser(user);
    }
  
    const handleUpdate = user => {
      console.log('state', this.state);
      handleEditUser(user);
      this.setState({isEditing: false});
    }

    const handleChange = e => {
      const field = e.target.name;
      const user = this.state.user;
      console.log('field', field);
      console.log('user', user);
      
      console.log(Array.isArray(field));
      if (Array.isArray(field)) {
        console.log('slice', field.slice());
      }else {
        user[field] = e.target.value;
        console.log('new', e.target.value);
        return this.setState({user: user});
      }

      //const newValue = value || e.target.value;
      //return this.setState({ user: {[key]: newValue}});
      //return this.setState({ company: {[key]: e.target.value }});
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
                  onChange={handleChange} />
              </div>
              <div className="form-group">
              <label htmlFor="companyName">Company</label>
                <input 
                  type="text"
                  className="form-control"
                  id="companyName"
                  name={`['company', 'name']`}
                  value={user.company.name}
                  placeholder="Company Name"
                  onChange={handleChange} />
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
                  onChange={handleChange} />
              </div>
            </form>
            <button className="btn btn-info btn-raised float-right" onClick={e => handleUpdate(user)}>Update</button>
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
