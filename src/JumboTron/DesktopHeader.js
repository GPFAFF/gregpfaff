import React from 'react'

export const DesktopHeader = ({ isDesktop }) => {
  return (
    <h2
      className="heading-desktop"
      aria-label="Hello!"
      aria-hidden={isDesktop}
    >
      <div className="title">
        <span>He</span>
        <span>llo
          <span className="period"/>
        </span>
      </div>
    </h2>
  )
}
