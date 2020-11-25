// external imports
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

// internal imports
import configureStore from './redux/configureStore';
import OrdersApp from './components/OrdersApp/OrdersApp';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <OrdersApp />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
