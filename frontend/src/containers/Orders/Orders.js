// external imports
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

// internal imports
import { logout } from '../../redux/actions/auth/authAction';
import OrdersPage from '../../components/Orders/OrdersPage';
import { readSavedOrders } from '../../redux/actions/orders/readSavedOrders/readSavedOrdersAction';

class Orders extends Component {

  componentDidMount() {
    this.props.onReadSavedOrders();
  }

  render() {
    return (
      <div className={'main'}>
        <OrdersPage
          onLogout={this.props.onLogout}
          orders={this.props.savedOrders}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    savedOrders: state.savedOrders
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onLogout: logout,
    onReadSavedOrders: readSavedOrders
  }, dispatch);
};

Orders.propTypes = {
  onLogout: PropTypes.func.isRequired,
  onReadSavedOrders: PropTypes.func.isRequired,
  savedOrders: PropTypes.shape({
    error: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    orders: PropTypes.array.isRequired
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
