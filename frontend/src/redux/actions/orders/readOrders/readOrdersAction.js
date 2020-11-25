// external import
import axios from 'axios';

export const READ_ORDERS_REQUEST = 'READ_ORDERS_REQUEST';
export const READ_ORDERS_SUCCESS = 'READ_ORDERS_SUCCESS';
export const READ_ORDERS_FAILURE = 'READ_ORDERS_FAILURE';

export const readOrders = () => {
  return (dispatch) => {
    dispatch(readOrdersRequest());
    axios
      .get(process.env.LOCAL_API_URL)
      .then(response => {
        const orders = response.data;
        dispatch(readOrdersSuccess(orders))
      })
      .catch(error => {
        dispatch(readOrdersFailure(error.message))
      });
  };
};

export const readOrdersRequest = () => {
  return {
    type: READ_ORDERS_REQUEST,
  };
};

export const readOrdersSuccess = (orders) => {
  return {
    type: READ_ORDERS_SUCCESS,
    orders
  };
};

export const readOrdersFailure = (error) => {
  return {
    type: READ_ORDERS_FAILURE,
    error
  };
};
