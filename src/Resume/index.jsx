import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import resumePDF from '../../greg.pdf';
import useViewport from '../hooks/viewport';
import './index.scss';

const Resume = () => {
  const [resume, setResume] = useState(null);
  const { width } = useViewport();
  const isDesktop = width >= 767;

  useEffect(() => {
    setResume(resumePDF);
  }, []);

  return (
    <>
      <h2>Click my resume to download</h2>
      {!isDesktop
        ? (
          <a
            className="download-resume button"
            target="_blank"
            rel="noopener noreferrer"
            href={resume}
          >
            Get my resume!
          </a>
        ) : (
          <a
            className="download-resume"
            target="_blank"
            rel="noopener noreferrer"
            href={resume}
          >
            <Document
              file={resume}
            >
              <Page pageNumber={1} />
            </Document>
          </a>
        )}
    </>
  );
};

export default Resume;
