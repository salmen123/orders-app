// external imports
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

// internal imports
import './Table.scss';

const Table = (props) => {

  const {
    isOrders,
    orders
  } = props;

  const history = useHistory();

  return (
    <table className={'content-Table'}>
      <thead className={'thead-Table'}>
        <tr className={'titles-Table'}>
          {
            orders[0] && Object.keys(orders[0]).map((title, index) => {
              if (title!=='id' && title!=='_id' && title!=='createdAt' && title!=='updatedAt' && title!=='__v')
                return(<th key={index} className={'title-Table'}>{title}</th>);
            })
          }
          <th className={'empty-title-Table'} />
        </tr>
      </thead>

      <tbody className={'tbody-Table'}>
      {
        orders.map((order, index) => {
          return (
            <tr
              key={index}
              className={'line-Table'}
              onClick={() => history.push({
                pathname: `/details/${order.id}`,
                state: {
                  details: order,
                  isOrders
                }
              })}
            >
              {
                order !== undefined && Object.keys(order).map((field, index) => {
                  if (field!=='id' && field!=='_id' && field!=='createdAt' && field!=='updatedAt' && field!=='__v')
                    return (
                      <td
                        key={index}
                        className={'element-Table'}
                      >
                        {order[field]}
                      </td>
                    )
                })
              }
            </tr>
          )
        })
      }
      </tbody>
    </table>
  );
};

Table.propTypes = {
  isOrders: PropTypes.bool.isRequired,
  orders: PropTypes.arrayOf(PropTypes.shape({
    address: PropTypes.string.isRequired,
    customer: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }))
};

export default Table;
