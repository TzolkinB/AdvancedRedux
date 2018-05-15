import React from 'react';
import authenticationContainer from './../containers/authenticationContainer';

export default function(ComposedComponent) {
  class Authentication extends React.Component {
    componentWillMount() {
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


  return Authentication;
}
