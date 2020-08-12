import React from 'react'
import './styles.scss';

const Sidebar = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
};

export default Sidebar;
