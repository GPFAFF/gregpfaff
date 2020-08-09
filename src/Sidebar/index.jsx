import React from 'react'
import './styles.scss';

export const Sidebar = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}
