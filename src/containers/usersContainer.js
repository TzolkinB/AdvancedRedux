import { connect } from 'react-redux';
import { fetchUsers } from './../redux/users'

const mapStateToProps = state => {
  console.log('state', state);
  return { users: state.users };
}

const mapDispatchToProps = dispatch => {
  return {
    handleUsers: () => dispatch(fetchUsers())
  };
}

export default connect(mapStateToProps, mapDispatchToProps);
