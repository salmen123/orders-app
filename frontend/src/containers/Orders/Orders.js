// external imports
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

// internal imports
import { logout } from '../../redux/actions/auth/authAction';
import OrdersPage from '../../components/Orders/OrdersPage';
import { readOrders } from '../../redux/actions/orders/readOrders/readOrdersAction';


class Orders extends Component {

  componentDidMount() {
    this.props.onReadOrders();
  }

  render() {
    return (
      <div className={'main'}>
        <OrdersPage
          onLogout={this.props.onLogout}
          orders={this.props.orders}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onLogout: logout,
    onReadOrders: readOrders
  }, dispatch);
};

Orders.propTypes = {
  onLogout: PropTypes.func.isRequired,
  onReadOrders: PropTypes.func.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
