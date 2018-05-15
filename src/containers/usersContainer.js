import { connect } from 'react-redux';
import { fetchUsers } from './../redux/users'

const mapStateToProps = state => {
  return { users: state.users };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
}

export default connect(mapStateToProps, mapDispatchToProps);
