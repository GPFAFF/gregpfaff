import React from 'react';
import { Link } from 'react-router-dom';
import { returnPath } from '../helpers';

export const NavigationArrow = ({ path }) => {

  const { pathName, routeName, icon } = returnPath(path);

  return (
    <Link
      to={pathName}
      className="nav-arrow"
      tabIndex="0"
      aria-label={`Navigate to about ${routeName}`}
    >
      {icon}
    </Link>
  )
}
