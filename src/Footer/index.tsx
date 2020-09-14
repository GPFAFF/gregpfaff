import React from 'react';
import './index.scss';

interface Props {
  className: string;
}

const Footer = (props: Props) => {

  const displayCC = () => {
    return `1982 - ${new Date().getFullYear()}`
  }

  const { className } = props;
  return (
    <footer
      className={className}
    >
      GP - {displayCC()}
    </footer>
  );
};

export default Footer;
