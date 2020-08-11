import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

export const Resume = ({ className }) => {
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div id="resume" className={className}>
      <div className="alternate-color">Here is</div>
      <div className="primary-color">
        <Document
          file="../../greg.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
        </Document>
      </div>
    </div>
  )
}
