// external imports
import PropTypes from 'prop-types';
import React from 'react';

// internal imports
import './DetailsTable.scss';

const DetailsTable = (props) => {

  const { order } = props;

  return (
    <table className={'Table-DetailsTable'}>
      <tbody>
      {
        Object.keys(order).map((title, index) => {
          if (title !== 'id') return (
            <tr
              className={'line-DetailsTable'}
              key={index}
            >
              <th className={'title-DetailsTable'}>
                {`${title} :`}
              </th>
              <td className={'element-DetailsTable'}>
                {order[title]}
              </td>
            </tr>
          );
        })
      }
      </tbody>
    </table>
  );
};

DetailsTable.propTypes = {
  order: PropTypes.shape({
    address: PropTypes.string.isRequired,
    customer: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })
};

export default DetailsTable;
