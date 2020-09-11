import React, { ReactNode } from 'react';
import './styles.scss';

interface Props {
  children: ReactNode;
  className: string;
}
const Sidebar = (props: Props) => {
  const { className, children } = props;

  return (
    <div className={className}>
      {children}
    </div>
  )
};

export default Sidebar;
