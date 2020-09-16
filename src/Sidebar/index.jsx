import React from 'react';
import './styles.scss';

const Sidebar = ({ className, children }) => (
  <div
    className={className}
  >
    {children}
  </div>
);

export default Sidebar;
