// internal imports
import {
  READ_ORDERS_REQUEST,
  READ_ORDERS_SUCCESS,
  READ_ORDERS_FAILURE
} from '../../../actions/orders/readOrders/readOrdersAction';

const initialState = {
  error: '',
  loading: false,
  orders: []
};

const readOrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_ORDERS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case READ_ORDERS_SUCCESS:
      return {
        error: '',
        loading: false,
        orders: action.orders

      };
    case READ_ORDERS_FAILURE:
      return {
        error: action.error,
        loading: false,
        orders: []
      };
    default: return state
  }
};

export default readOrdersReducer;
