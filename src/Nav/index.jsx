import React from 'react'
import { RiMenu3Line } from 'react-icons/ri';

import './index.scss';

export const Nav = ({ onClick }) => {
  return (
    <div
      className="menu-nav"
      onClick={onClick}
    >
      <RiMenu3Line />
    </div>
  )
}
