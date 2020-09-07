import React, { useState, useEffect } from 'react'
import { DesktopHeader } from './DesktopHeader';
import { MobileHeader } from './MobileHeader';
import useViewport from '../hooks/viewport'
import './index.scss';

const JumboTron = () => {
  const { isMobile, isDesktop } = useViewport();
  return (
    <section role="main">
      <div className="primary-color">
        {isDesktop
          ? <DesktopHeader isDesktop={isDesktop} />
          : <MobileHeader isMobile={isMobile} />
        }
      </div>
      <div className="alternate-color"/>
    </section>
  )
};

export default JumboTron;
