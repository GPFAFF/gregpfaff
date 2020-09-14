import React from 'react';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';
import useViewport from '../hooks/viewport';
import './index.scss';

const JumboTron = () => {
  const { width } = useViewport();
  const isDesktop = width >= 767;

  return (
    <section className="container">
      <div className="primary-color jumbotron">
        {isDesktop
          ? <DesktopHeader isDesktop={isDesktop} />
          : <MobileHeader isDesktop={isDesktop} />
        }
      </div>
      <div className="alternate-color" />
    </section>
  );
};

export default JumboTron;
