import React from 'react'
import './index.scss';

const Footer = ({ className }) => {
  const renderTimeStamp = () => (
    new Date().getFullYear()
  )

  return (
    <footer className={className}>
      <p>&copy;1982 - {renderTimeStamp()}</p>
    </footer>
  )
};

export default Footer;
