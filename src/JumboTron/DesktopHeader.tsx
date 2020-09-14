import React from 'react';

interface Props {
  isDesktop: boolean;
}

const DesktopHeader = (props: Props) => {
  const { isDesktop } = props;

  return (
    <h2
      className="heading-desktop"
      aria-label="Hello!"
      aria-hidden={isDesktop}
    >
      <div className="title">
        <span>He</span>
        <span>
          llo
          <span className="period" />
        </span>
      </div>
    </h2>
  )
};

export default DesktopHeader;
