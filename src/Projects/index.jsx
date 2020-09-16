import React from 'react';
import Resume from '../Resume';
import './index.scss';

const Projects = ({ className }) => (
  <section
    id="projects"
    className={className}
  >
    <div className="primary-color">
      <Resume />
    </div>
  </section>
);

export default Projects;
