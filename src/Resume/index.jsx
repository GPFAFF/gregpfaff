import React, { useState, useEffect, Fragment } from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import resumePDF from '../../greg.pdf';
import useViewport from '../hooks/viewport';
import './index.scss';

export const Resume = () => {
  const [resume, setResume] = useState(null);
  const { isDesktop, isMobile } = useViewport();

  useEffect(() => {
    setResume(resumePDF)
  }, [resume]);

  return (
    <Fragment>
      <h3>Click my resume to download</h3>
      {isMobile || !isDesktop
        ? (
            <a
              className="download-resume button"
              target="_blank"
              href={resume}
            >
              Get my resume!
            </a>
        ) : (
          <a className="download-resume" target="_blank" href={resume}>
            <Document
              file={resume}
            >
              <Page pageNumber={1} />
            </Document>
          </a>
        )
      }
    </Fragment>
  )
}
