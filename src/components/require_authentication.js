import React             from 'react';
import { withRouter }    from 'react-router';
import authenticationContainer from './../containers/authenticationContainer';

export default function(ComposedComponent) {
  class Authentication extends React.Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        alert('You must "sign in" to view this page.');
        this.props.history.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.props.history.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  return authenticationContainer(withRouter(Authentication));
}
