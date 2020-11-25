// external imports
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

// internal imports
import './Header.scss';

const Header = (props) => {

  const { onLogout } = props;

  return (
    <div className={'header'}>
      <nav>
        <NavLink to='/' activeClassName='selected-Header' exact>
          Home
        </NavLink>
        {' | '}
        <NavLink to='/orders' activeClassName='selected-Header'>
          Orders
        </NavLink>
      </nav>
      <button
        className={'button-logout-Header'}
        onClick={() => onLogout()}
      >
        Log Out
      </button>
    </div>
  );
};

Header.propTypes = {
  onLogout: PropTypes.func.isRequired
};

export default Header;
