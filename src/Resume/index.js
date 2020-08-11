import React, { useState } from 'react';
import { Document } from 'react-pdf/dist/entry.webpack';

export const Resume = ({ className }) => {
  return (
    <div id="resume" className={className}>
      <div className="alternate-color">Here is</div>
      <div className="primary-color">
        <Document
          file="../../greg.pdf"
          />
      </div>
    </div>
  )
}
