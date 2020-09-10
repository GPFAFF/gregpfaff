import React from 'react';

interface Props {
  isMobile: boolean;
}

const MobileHeader = (props: Props) => {
  const { isMobile } = props;

  return (
    <h2 className="heading-mobile" aria-hidden={isMobile}>
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
