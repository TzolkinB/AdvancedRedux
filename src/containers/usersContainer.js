import { connect } from 'react-redux';
import { 
  fetchUsers, updateUser, editUser,
  createUser, clearUser, deleteUser
} from './../redux/users'

const mapStateToProps = state => {
  console.log('state to props', state);
  return { users: state.users};
}

const mapDispatchToProps = dispatch => {
  return {
    handleGetUsers: () => dispatch(fetchUsers()),
    handleEditUser: id => dispatch(editUser(id)),
    handleAddUser: user => dispatch(createUser(user)),
    handleDeleteUser: user => dispatch(deleteUser(user)),
    clearUser: () => dispatch(clearUser()),
    handleUpdateUser: (id, field, value) => dispatch(updateUser(id, field, value))
  };
}

export default connect(mapStateToProps, mapDispatchToProps);
