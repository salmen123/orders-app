// external imports
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import validator from 'validator';

// internal imports
import './LogInPage.scss';

const LogInPage = (props) => {

  const { auth, onLogin } = props;

  const [user, setUser] = useState({email: '', password: ''});

  const history = useHistory();

  useEffect(() => {
    Object.keys(auth.user).length && history.push({pathname: '/'});
    auth.error && toast.error(auth.error, { autoClose: false });
  }, [auth]);

  const handleInputChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  };

  const formIsValid = () => {
    const errors = {};
    !validator.isEmail(user.email) && (errors.email='Invalid Email');
    user.password.length < 7 && (errors.password = 'Password must contain at least 7 character');
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  };

  return (
    <div className={'LogInPage'}>
      <div className={'form-LogInPage'}>
        <fieldset className={'fieldset-LogInPage'}>
          <legend className={'legend-LogInPage'}>Sign In :</legend>
          <table>
            <tbody>
            <tr>
              <td>
                <div
                  className={'label-LogInPage'}
                >
                  Enter your email :
                </div>
              </td>
              <td>
                <input
                  className={'input-LogInPage'}
                  id='email'
                  name='email'
                  onChange={handleInputChange}
                  placeholder='email@example.com'
                  type='email'
                />
              </td>
            </tr>
            <tr>
              <td>
                <div
                  className={'label-LogInPage'}
                >
                  Enter your password :
                </div>
              </td>
              <td>
                <input
                  className={'input-LogInPage'}
                  id='password'
                  name='password'
                  onChange={handleInputChange}
                  placeholder='*****'
                  type='password'
                />
              </td>
            </tr>
            </tbody>
          </table>
        </fieldset>
        <button
          className={'button-LogInPage'}
          disabled={!formIsValid() ? true : auth.loading}
          onClick={() => onLogin(user.email, user.password)}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

LogInPage.propTypes = {
  auth: PropTypes.shape({
    error: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    user: PropTypes.shape({}).isRequired
  }),
  onLogin: PropTypes.func.isRequired
};

export default LogInPage;
