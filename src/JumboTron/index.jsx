import React from 'react'

import './index.scss';

export const JumboTron = () => {
  return (
    <section role="main">
      <div className="primary-color">
        <h2 aria-label="Hello!">
          <div className="title">
            <span>He</span>
            <span>llo
              <span className="period"/>
            </span>
          </div>
        </h2>
      </div>
      <div className="alternate-color"/>
    </section>
  )
}
