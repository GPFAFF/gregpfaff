import React from 'react'

export const MobileHeader = ({ isMobile }) => {
  return (
    <h2 className="heading-mobile" aria-hidden={isMobile}>
      <div className="title" aria-label="Hello!">
        <span>H</span>
        <span>e</span>
        <span>l</span>
        <span>l</span>
        <span>o
          <span className="period"/>
        </span>
      </div>
    </h2>
  )
}
