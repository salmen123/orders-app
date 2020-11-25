// external import
import { combineReducers } from 'redux';

// internal imports
import authReducer from './auth/authReducer';
import readOrdersReducer from './orders/readOrders/readOrdersReducer';

const rootReducer = combineReducers(
  {
    auth: authReducer,
    orders: readOrdersReducer
  }
);

export default rootReducer;
