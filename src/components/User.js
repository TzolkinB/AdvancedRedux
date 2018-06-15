import React from 'react';
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

  toggleEdit() {
    this.setState({isEditing: true})
  }

  handleChange(e){
    console.log('here')
  }

  updateButton() {
    this.setState({isEditing: false})
  }

  render() {
    const {user, handleUpdateUser} = this.props;
    if(this.state.isEditing) {
      console.log(user.id, this.state.isEditing);
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
                  name={user.company}
                  value={user.company}
                  placeholder="Company Name"
                  onChange={this.handleChange} />
              </div>
            </form>
            <span className="badge badge-primary p-3">{user.email}</span>
            <button className="btn btn-success float-right" onClick={e => this.updateButton()}>Update</button>
          </div>
        </div>
      );
    }
    return(
      <div className="card m-2" key={user.id}>
        <div className="card-body" key={user.id}>
          <h4 className="card-title">{user.name}</h4>
          <p className="card-title">{user.company.name || 'blank'}</p>
          <span className="badge badge-primary p-3">{user.email}</span>
          <button className="btn btn-info float-right" onClick={e => this.toggleEdit()}>Edit</button>
        </div>
      </div>
    );
  }
}

export default usersContainer(withRouter(User));
