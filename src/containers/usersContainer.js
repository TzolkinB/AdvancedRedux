import { connect } from 'react-redux';
import { 
  fetchUsers, updateUser, editUser,
  addUser
} from './../redux/users'

const mapStateToProps = state => {
  console.log('state to props', state);
  return { users: state.users};
}

const mapDispatchToProps = dispatch => {
  return {
    handleGetUsers: () => dispatch(fetchUsers()),
    handleEditUser: id => dispatch(editUser(id)),
    handleAddUser: user => dispatch(addUser(user)),
    handleUpdateUser: (id, field, value) => dispatch(updateUser(id, field, value))
  };
}

export default connect(mapStateToProps, mapDispatchToProps);
