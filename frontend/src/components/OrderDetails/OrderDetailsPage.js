// external imports
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { toast } from 'react-toastify';

// internal imports
import DetailsTable from '../DetailsTable/DetailsTable';
import './OrderDetailsPage.scss'

class OrderDetailsPage extends Component {
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
                      disabled={false}
                      onClick={() => {
                        console.log('order btn clicked');
                        toast.success(`${this.props.order.title} ordred.`);
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
  order: PropTypes.shape({
    address: PropTypes.string.isRequired,
    customer: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })
};

export default OrderDetailsPage;
