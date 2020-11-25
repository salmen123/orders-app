// internal imports
import {
  READ_SAVED_ORDERS_REQUEST,
  READ_SAVED_ORDERS_SUCCESS,
  READ_SAVED_ORDERS_FAILURE
} from '../../../actions/orders/readSavedOrders/readSavedOrdersAction';

const initialState = {
  error: '',
  loading: false,
  orders: []
};

const readSavedOrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_SAVED_ORDERS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case READ_SAVED_ORDERS_SUCCESS:
      return {
        error: '',
        loading: false,
        orders: action.orders
      };
    case READ_SAVED_ORDERS_FAILURE:
      return {
        error: action.error,
        loading: false,
        orders: []
      };
    default: return state
  }
};

export default readSavedOrdersReducer;
