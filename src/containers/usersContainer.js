import { connect } from 'react-redux';
import { fetchUsers } from './../redux/users'

const mapStateToProps = state => {
  console.log('state', state);
  return { users: state.users };
}

const mapDispatchToProps = dispatch => {
  console.log('dispatch', dispatch);
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
}

export default connect(mapStateToProps, mapDispatchToProps);
