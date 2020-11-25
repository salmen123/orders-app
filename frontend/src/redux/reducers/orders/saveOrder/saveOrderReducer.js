// internal imports
import {
  SAVE_ORDER_REQUEST,
  SAVE_ORDER_SUCCESS,
  SAVE_ORDER_FAILURE
} from '../../../actions/orders/saveOrder/saveOrderAction';

const initialState = {
  error: '',
  loading: false,
  order: {}
};

const saveOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ORDER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case SAVE_ORDER_SUCCESS:
      return {
        error: '',
        loading: false,
        order: action.order

      };
    case SAVE_ORDER_FAILURE:
      return {
        error: action.error,
        loading: false,
        order: {}
      };
    default: return state
  }
};

export default saveOrderReducer;
