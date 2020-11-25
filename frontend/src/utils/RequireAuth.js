// HoC for check authentication

// external imports
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default (ComposedComponent) => {
  class RequireAuth extends Component {

    componentDidMount() {
      if (!Object.keys(this.props.auth.user).length)
        this.props.history.replace('/login');
    }

    componentDidUpdate() {
      if (!Object.keys(this.props.auth.user).length)
        this.props.history.replace('/login');
    }

    render() {
      return (
        <ComposedComponent { ...this.props } />
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
      auth: state.auth
    };
  };

  RequireAuth.propTypes = {
    auth: PropTypes.shape({
      error: PropTypes.string.isRequired,
      loading: PropTypes.bool.isRequired,
      user: PropTypes.shape({}).isRequired
    }),
    history: PropTypes.shape({
      replace: PropTypes.func.isRequired
    }).isRequired,
  };

  return connect(mapStateToProps)(RequireAuth);
}
