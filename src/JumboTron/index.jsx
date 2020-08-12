import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { FaArrowDown } from 'react-icons/fa';
import './index.scss';

const JumboTron = ({ className }) => {
  return (
    <Fragment>
      <div className="primary-color">
        <h2 aria-label="Hello!">
          <div className="title">
            <span>He</span>
            <span>llo
              <span className="period"/>
            </span>
          </div>
        </h2>
      </div>
      <div className="alternate-color"/>
    </Fragment>
  )
};

export default JumboTron;
