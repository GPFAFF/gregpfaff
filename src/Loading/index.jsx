import React from 'react'
import './index.scss';

const Loading = () => {
  return (
    <div aria-label="Loading" className="loading">
      <div aria-hidden="true"></div>
      <div aria-hidden="true"></div>
      <div aria-hidden="true"></div>
      <div aria-hidden="true"></div>
    </div>
  )
}

export default Loading;