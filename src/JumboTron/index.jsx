import React, { useState, useEffect } from 'react'
import { DesktopHeader } from './DesktopHeader';
import { MobileHeader } from './MobileHeader';

import './index.scss';

const JumboTron = () => {
  const [isDesktop, setIsDesktop] = useState(null);
  const [isMobile, setIsMobile] = useState(null);

  const updateMedia = () => {
    if (window.innerWidth <= 767) {
      setIsMobile(true);
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    window.addEventListener("load", updateMedia);

    return () => {
      window.removeEventListener("resize", updateMedia);
      window.addEventListener("load", updateMedia);
    }

  }, [isDesktop, isMobile]);

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
