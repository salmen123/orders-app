// external imports
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

// internal imports
import OrderDetailsPage from '../../components/OrderDetails/OrderDetailsPage';
import { saveOrder } from '../../redux/actions/orders/saveOrder/saveOrderAction';

class OrderDetails extends Component {

  render() {
    return (
      <div className={'main'}>
        <OrderDetailsPage
          history={this.props.history}
          isOrders={this.props.location.state && this.props.location.state.isOrders}
          onSaveOrder={this.props.onSaveOrder}
          order={this.props.order}
          savedOrder={this.props.savedOrder}
        />
      </div>
    );
  }
}

const getOrderById = (orders, id) => {
  return orders.find(order => order.id === id) || null;
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  const order = id
    && state.orders.orders.length > 0
    && getOrderById(state.orders.orders, id);
  return {
    order,
    savedOrder: state.savedOrder
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onSaveOrder: saveOrder
  }, dispatch);
};

OrderDetails.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      isOrders: PropTypes.bool.isRequired
    })
  }).isRequired,
  onSaveOrder: PropTypes.func.isRequired,
  order: PropTypes.shape({
    address: PropTypes.string.isRequired,
    customer: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }),
  savedOrder: PropTypes.shape({
    error: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    order: PropTypes.shape({}).isRequired
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);
