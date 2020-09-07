import React from 'react';
import './styles.scss';

const Sidebar = ({ children, className }) => (
  <div className={className}>
    {children}
  </div>
);

export default Sidebar;
