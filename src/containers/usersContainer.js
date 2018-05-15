import { connect } from 'react-redux';
import { setUsers } from './../redux/users'

const mapStateToProps = state => {
  console.log('state', state);
  return { users: state.users };
}

const mapDispatchToProps = dispatch => {
  console.log('dispatch', dispatch);
  return {
    handleUsers: () => dispatch(setUsers())
  };
}

export default connect(mapStateToProps, mapDispatchToProps);
