import React from 'react';
import './index.scss';

interface Props {
  className: string;
}

const Footer = (props: Props) => {
  const { className } = props;
  return (
    <footer
      className={className}
    >
      Here is the footer
    </footer>
  );
};

export default Footer;
