import React from 'react';
import Resume from '../Resume';
import './index.scss';

interface Props {
  className: string;
}

const Projects = (props: Props) => {
  const { className } = props;
  return (
    <section
      id="projects"
      className={className}
    >
      <div className="primary-color">
        <Resume />
      </div>
    </section>
  );
};

export default Projects;
