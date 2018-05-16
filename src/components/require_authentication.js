import React from 'react';
import { withRouter }    from 'react-router';
import authenticationContainer from './../containers/authenticationContainer';

export default function(ComposedComponent) {
  class Authentication extends React.Component {
    componentWillMount() {
      console.log('auth', this.props.authenticated);
      if (!this.props.authenticated) {
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
