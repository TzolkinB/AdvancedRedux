import { connect } from 'react-redux';
import { editUser } from './../redux/activeUser'

const mapStateToProps = state => {
  return { ...state.user };
}

const mapDispatchToProps = dispatch => {
  return {
    handleEditUser: id => dispatch(editUser(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps);
