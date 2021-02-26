import React from 'react';
import resumePDF from '../../greg.pdf';
import './index.scss';

const Resume = () => (
  <>
    <h2>Click my resume to download</h2>
    <a
      className="download-resume button"
      target="_blank"
      rel="noopener noreferrer"
      href={resumePDF}
    >
      Get my resume!
    </a>
  </>
);

export default Resume;
