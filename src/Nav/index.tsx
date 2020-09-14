import React from 'react';
import { RiMenu3Line } from 'react-icons/ri';

import './index.scss';

interface Props {
  ariaLabel: string;
  onClick: () => void;
}

const Nav = (props: Props) => {
  const { ariaLabel, onClick } = props;
  return (
    <div
      role="menu"
      className="menu-nav"
      aria-label={ariaLabel}
      onClick={onClick}
      tabIndex={0}
    >
      <RiMenu3Line />
    </div>
  )
};

export default Nav;