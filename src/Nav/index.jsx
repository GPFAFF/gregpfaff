import React from 'react';
import { RiMenu3Line } from 'react-icons/ri';

import './index.scss';

const Nav = ({ ariaLabel, onClick }) => (
  <div>
    <nav
      className="menu-nav"
      aria-label={ariaLabel}
      onKeyPress={onClick}
      onClick={onClick}
      tabIndex={0}
    >
      <RiMenu3Line />
    </nav>
  </div>
);

export default Nav;
