import { connect } from 'react-redux';
import { fetchUsers, updateUser } from './../redux/users'

const mapStateToProps = state => {
  return { users: state.users};
}

const mapDispatchToProps = dispatch => {
  return {
    handleGetUsers: () => dispatch(fetchUsers()),
    handleUpdateUser: (id, field, value) => dispatch(updateUser(id, field, value))
  };
}

export default connect(mapStateToProps, mapDispatchToProps);
