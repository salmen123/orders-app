// external imports
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { toast } from 'react-toastify';

// internal imports
import DetailsTable from '../DetailsTable/DetailsTable';
import './OrderDetailsPage.scss'

class OrderDetailsPage extends Component {

  componentDidUpdate(prevProps) {
    prevProps.savedOrder.loading
      && !this.props.savedOrder.loading
      && this.props.savedOrder.error === ''
      && toast.success(`${this.props.savedOrder.order.title} ordred.`);
  }

  render() {
    return (
      <div className={'OrderDetailsPage'}>
        {
          this.props.order ? (
            <div className={'Table-OrderDetailsPage'}>
              {
                !this.props.isOrders
                  && (
                    <button
                      className={'order-button-OrderDetailsPage'}
                      disabled={this.props.savedOrder.loading}
                      onClick={() => {
                        this.props.onSaveOrder(this.props.order);
                      }}
                    >
                      Order
                    </button>
                  )
              }
              <DetailsTable order={this.props.order} />
            </div>
          ) : (
            <div className={'no-order-OrderDetailsPage'}>
              Orders not found
            </div>
          )
        }
      </div>
    );
  }
}

OrderDetailsPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  isOrders: PropTypes.bool.isRequired,
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
    order: PropTypes.shape({
      address: PropTypes.string,
      customer: PropTypes.string,
      id: PropTypes.string,
      title: PropTypes.string
    }).isRequired
  })
};

export default OrderDetailsPage;
