// internal imports
import {
  LOGIN_REQUEST,
  LOGIN_SUCCES,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCES
} from '../../actions/auth/authAction';

const initialState = {
  error: '',
  loading: false,
  user: {}
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      };
    case LOGIN_SUCCES:
      return {
        error: '',
        loading: false,
        user: action.user
      };
    case LOGIN_FAILURE:
      return {
        error: action.error,
        loading: false,
        user: {}
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case LOGOUT_SUCCES:
      return {
        error: '',
        loading: false,
        user: {}
      };
    default: return state;
  }
};

export default authReducer;
