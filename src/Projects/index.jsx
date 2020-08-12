import React from 'react';
import { Resume } from '../Resume';
import './index.scss';

export const Projects = ({ className }) => {
  return (
    <section id="projects" className={className}>
      <div className="primary-color">
        <Resume />
      </div>
      <div className="alternate-color">
        <p>
          Lorem Ipsum Lorem Ipsum
          Lorem Ipsum Lorem Ipsum
          Lorem Ipsum Lorem Ipsum
          Lorem Ipsum Lorem Ipsum
          Lorem Ipsum Lorem Ipsum
        </p>
      </div>
    </section>
  )
}
