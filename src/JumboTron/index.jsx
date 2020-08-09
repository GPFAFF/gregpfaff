import React from 'react'

import './index.scss';

export const JumboTron = () => {
  return (
    <section role="main">
      <div className="left">
        <h2 aria-label="Hello!">
          <div className="title">
            <span>He</span>
            <span>llo
              <span className="period"/>
            </span>
          </div>
        </h2>
      </div>
      <div className="right"/>
    </section>
  )
}
