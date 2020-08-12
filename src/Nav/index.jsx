import React from 'react'
import { RiMenu3Line } from 'react-icons/ri';

import './index.scss';

const Nav = ({ onClick, ariaLabel }) => {
  return (
    <div
      className="menu-nav"
      aria-label={ariaLabel}
      onClick={onClick}
      tabIndex="0"
    >
      <RiMenu3Line />
    </div>
  )
};

export default Nav;
