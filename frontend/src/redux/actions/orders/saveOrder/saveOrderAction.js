// external import
import axios from 'axios';

export const SAVE_ORDER_REQUEST = 'SAVE_ORDER_REQUEST';
export const SAVE_ORDER_SUCCESS = 'SAVE_ORDER_SUCCESS';
export const SAVE_ORDER_FAILURE = 'SAVE_ORDER_FAILURE';

export const saveOrder = (order) => {
  return (dispatch) => {
    dispatch(saveOrderRequest());
    axios
      .post(process.env.API_URL + '/orders', order)
      .then(response => {
        const order = response.data;
        dispatch(saveOrderSuccess(order))
      })
      .catch(error => {
        dispatch(saveOrderFailure(error.message))
      });
  };
};

export const saveOrderRequest = () => {
  return {
    type: SAVE_ORDER_REQUEST,
  };
};

export const saveOrderSuccess = (order) => {
  return {
    type: SAVE_ORDER_SUCCESS,
    order
  };
};

export const saveOrderFailure = (error) => {
  return {
    type: SAVE_ORDER_FAILURE,
    error
  };
};
