import React from 'react';

const MobileHeader = ({ isDesktop }) => (
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
);

export default MobileHeader;
