import { connect } from 'react-redux';
import { setUsers } from './../redux/users'

const mapStateToProps = state => {
  console.log('state', state);
  return { users: state.users.all };
}

const mapDispatchToProps = dispatch => {
  return {
    handleUsers: () => dispatch(setUsers())
  };
}

export default connect(mapStateToProps, mapDispatchToProps);
