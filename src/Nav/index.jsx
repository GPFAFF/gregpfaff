import React from 'react'
import { RiMenu3Line } from 'react-icons/ri';

import './index.scss';

export const Nav = ({ onClick, ariaLabel }) => {
  return (
    <div
      className="menu-nav"
      ariaLabel={ariaLabel}
      onClick={onClick}
      tabIndex="0"
    >
      <RiMenu3Line />
    </div>
  )
}
