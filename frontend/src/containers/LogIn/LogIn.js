// external imports
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

// internal imports
import { login } from '../../redux/actions/auth/authAction';
import LogInPage from '../../components/LogIn/LogInPage';

class LogIn extends Component {
  render() {
    return (
      <div className={'main'}>
        <LogInPage
          auth={this.props.auth}
          onLogin={this.props.onLogin}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onLogin: login
  }, dispatch);
};

LogIn.propTypes = {
  auth: PropTypes.shape({
    error: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    user: PropTypes.shape({}).isRequired
  }),
  onLogin: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
