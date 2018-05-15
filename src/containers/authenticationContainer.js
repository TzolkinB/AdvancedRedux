import { connect } from 'react-redux';
import { authenticate } from './../redux/authentication';

const mapStateToProps = state => {
  return { authenticated: state.authenticated };
}

const mapDispatchToProps = dispatch => {
  return {
    authenticate: isLoggedIn => dispatch(authenticate(isLoggedIn))
  };
}

export default connect(mapStateToProps, mapDispatchToProps);
