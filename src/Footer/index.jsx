import React from 'react';
import './index.scss';

const Footer = ({ className }) => {
  const displayCC = () => `1982 - ${new Date().getFullYear()}`;

  return (
    <footer
      className={className}
    >
      <p>
        G P&#8482; -
        {' '}
        {displayCC()}
      </p>
    </footer>
  );
};

export default Footer;
