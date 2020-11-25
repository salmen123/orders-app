// external imports
import PropTypes from 'prop-types';
import React, { Component } from 'react';

// internal imports
import Header from '../Header/Header';
import Table from '../Table/Table';
import './HomePage.scss';

class HomePage extends Component {
  render() {
    return (
      <div className={'HomePage'}>
        <Header
          onLogout={this.props.onLogout}
        />
        <div className={'Table-HomePage'}>
          {
            this.props.orders.loading
              ? (<div className={'loading-orders-HomePage'}>Loading...</div>)
              : this.props.orders.error
              ? (<div className={'error-orders-HomePage'}>{this.props.orders.error}</div>)
              : (
                <Table
                  isOrders={false}
                  orders={this.props.orders.orders}
                />
              )
          }
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
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

export default HomePage;
