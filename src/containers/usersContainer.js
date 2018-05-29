import { connect } from 'react-redux';
import { fetchUsers, updateUser } from './../redux/users'

const mapStateToProps = state => {
  console.log('state', state);
  return { users: state.users};
}

const mapDispatchToProps = dispatch => {
  return {
    handleGetUsers: () => dispatch(fetchUsers()),
    handleUpdateUser: id => dispatch(updateUser(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps);
