import React from 'react';
import { Resume } from '../Resume';
import './index.scss';

const Projects = ({ className, ref }) => {
  return (
    <section
      id="projects"
      className={className}
      ref={ref}
    >
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
};

export default Projects;
