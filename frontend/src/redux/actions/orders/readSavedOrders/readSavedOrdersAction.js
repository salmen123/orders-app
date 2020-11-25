// external import
import axios from 'axios';

export const READ_SAVED_ORDERS_REQUEST = 'READ_SAVED_ORDERS_REQUEST';
export const READ_SAVED_ORDERS_SUCCESS = 'READ_SAVED_ORDERS_SUCCESS';
export const READ_SAVED_ORDERS_FAILURE = 'READ_SAVED_ORDERS_FAILURE';

export const readSavedOrders = () => {
  return (dispatch) => {
    dispatch(readSavedOrdersRequest());
    axios
      .get(process.env.API_URL + '/orders')
      .then(response => {
        const orders = response.data;
        dispatch(readSavedOrdersSuccess(orders))
      })
      .catch(error => {
        dispatch(readSavedOrdersFailure(error.message))
      });
  };
};

export const readSavedOrdersRequest = () => {
  return {
    type: READ_SAVED_ORDERS_REQUEST,
  };
};

export const readSavedOrdersSuccess = (orders) => {
  return {
    type: READ_SAVED_ORDERS_SUCCESS,
    orders
  };
};

export const readSavedOrdersFailure = (error) => {
  return {
    type: READ_SAVED_ORDERS_FAILURE,
    error
  };
};
