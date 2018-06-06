import { connect } from 'react-redux';
import { editUser, addUser } from './../redux/activeUser'

const mapStateToProps = state => {
  return { ...state.user };
}

const mapDispatchToProps = dispatch => {
  return {
    handleEditUser: id => dispatch(editUser(id)),
    handleAddUser: user => dispatch(addUser(user))
  };
}

export default connect(mapStateToProps, mapDispatchToProps);
