import React from 'react';
interface Props {
  isDesktop: boolean;
}

const MobileHeader = (props: Props) => {
  const { isDesktop } = props;

  return (
    <h2 className="heading-mobile" aria-hidden={isDesktop}>
      <div className="title" aria-label="Hello!">
        <span>H</span>
        <span>e</span>
        <span>l</span>
        <span>l</span>
        <span>
          o
          <span className="period" />
        </span>
      </div>
    </h2>
  )
};

export default MobileHeader;
