// external imports
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// internal imports
import Home from '../../containers/Home/Home';
import LogIn from '../../containers/LogIn/LogIn';
import Orders from '../../containers/Orders/Orders';
import ProductDetails from '../../containers/OrderDetails/OrderDetails';
import RequireAuth from '../../utils/RequireAuth';
import './OrdersApp.scss';

const OrdersApp = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={RequireAuth(Home)} />
        <Route  path='/login' component={LogIn} />
        <Route  path='/orders' component={RequireAuth(Orders)} />
        <Route  path='/details/:id' component={RequireAuth(ProductDetails)} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </>
  );
};

export default OrdersApp;
