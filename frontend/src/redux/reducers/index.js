// external import
import { combineReducers } from 'redux';

// internal imports
import authReducer from './auth/authReducer';
import readOrdersReducer from './orders/readOrders/readOrdersReducer';
import readSavedOrdersReducer from './orders/readSavedOrders/readSavedOrdersReducer';
import saveOrderReducer from './orders/saveOrder/saveOrderReducer';

const rootReducer = combineReducers(
  {
    auth: authReducer,
    orders: readOrdersReducer,
    savedOrders: readSavedOrdersReducer,
    savedOrder: saveOrderReducer
  }
);

export default rootReducer;
