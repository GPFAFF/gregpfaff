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
      <p>G P&#8482; - {displayCC()}</p>
    </footer>
  );
};

export default Footer;
