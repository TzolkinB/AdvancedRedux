import React from 'react';

class EditUser extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    console.log('here')
  }

  updateButton() {
    this.setState({isEditing: false});
    console.log('isEditing', isEditing);
  }

  render() {
    const {user, handleUpdateUser, isEditing} = this.props;
    console.log('editing', isEditing);
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
                placeholder="Company Name"
                onChange={this.handleChange} />
            </div>
          </form>
          <span className="badge badge-primary p-3">{user.email}</span>
          <button className="btn btn-success float-right" onClick={this.updateButton}>Update</button>
        </div>
      </div>
    );
  }
}


export default EditUser;
