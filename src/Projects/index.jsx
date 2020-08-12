import React, { Fragment } from 'react';
import { Resume } from '../Resume';
import { Link } from 'react-router-dom';
import { FaArrowDown } from 'react-icons/fa';
import './index.scss';

const Projects = () => {
  return (
    <Fragment>
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
    </Fragment>
  )
};

export default Projects;
