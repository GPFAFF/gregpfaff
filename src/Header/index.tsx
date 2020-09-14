import React from 'react';
import './index.scss';

interface Props {
  title: string;
}

const Header = (props: Props) => {
  const { title } = props;
  return (
    <h1
      id="home"
    >
      {title}
    </h1>
  )
};

export default Header;
