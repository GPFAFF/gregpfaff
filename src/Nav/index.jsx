import React from 'react';
import { RiMenu3Line } from 'react-icons/ri';

import './index.scss';

const Nav = ({ ariaLabel, onClick }) => (
  <div
    role="button"
    className="menu-nav"
    aria-label={ariaLabel}
    onKeyPress={onClick}
    onClick={onClick}
    tabIndex={0}
  >
    <RiMenu3Line />
  </div>
);

export default Nav;
