// internal imports
import fire from '../../../utils/fire';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCES = 'LOGIN_SUCCES';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCES = 'LOGOUT_SUCCES';

export const login = (email, password) => {
  return (dispatch) => {
    dispatch(loginRequest());
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => dispatch(loginSucces(response.user)))
      .catch(error => dispatch(loginFailure(error.message)));
  };
};

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  };
};

export const loginSucces = (user) => {
  return {
    type: LOGIN_SUCCES,
    user
  };
};

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    error
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(logoutRequest());
    dispatch(logoutSucces());
  };
};

export const logoutRequest = () => {
  return {
    type: LOGOUT_REQUEST
  };
};

export const logoutSucces = () => {
  return {
    type: LOGOUT_SUCCES
  };
};
