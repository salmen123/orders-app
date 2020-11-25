// external imports
import PropTypes from 'prop-types';
import React, { Component } from 'react';

// internal imports
import Header from '../Header/Header';
import Table from '../Table/Table';
import './OrdersPage.scss';

class OrdersPage extends Component {
  render() {
    return (
      <div className={'OrdersPage'}>
        <Header
          onLogout={this.props.onLogout}
        />
        <div className={'Table-OrdersPage'}>
          {
            this.props.orders.loading
              ? (<div className={'loading-orders-OrdersPage'}>Loading...</div>)
              : this.props.orders.error
              ? (<div className={'error-orders-OrdersPage'}>{this.props.orders.error}</div>)
              : (
                <Table
                  isOrders={true}
                  orders={this.props.orders.orders}
                />
              )
          }
        </div>
      </div>
    );
  }
}

OrdersPage.propTypes = {
  onLogout: PropTypes.func.isRequired,
  orders: PropTypes.shape({
    error: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    orders: PropTypes.arrayOf(PropTypes.shape({
      address: PropTypes.string.isRequired,
      customer: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }))
  })
};

export default OrdersPage;
