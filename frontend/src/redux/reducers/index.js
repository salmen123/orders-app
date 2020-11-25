// external import
import { combineReducers } from 'redux';

// internal imports
import authReducer from './auth/authReducer';
import readOrdersReducer from './orders/readOrders/readOrdersReducer';
import saveOrderReducer from './orders/saveOrder/saveOrderReducer';

const rootReducer = combineReducers(
  {
    auth: authReducer,
    orders: readOrdersReducer,
    savedOrder: saveOrderReducer
  }
);

export default rootReducer;
