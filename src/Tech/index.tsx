import React from 'react';
import './index.scss';

interface Props {
  className: string;
}

const Tech = (props: Props) => {
  const { className } = props;

  return (
    <section
      id="tech"
      className={className}
    >
      <div className="alternate-color">
        <h2>Technologies</h2>
        <p>I have used a variety of technologies both front-end and back-end but my primary experience lies in web-based development. I am focused on React, JavaScript, HTML, and CSS.
        </p>
        <p>I have worked on full-stack applications in React/Redux/TypeScript building out a component library for a fortune 500 client as well as building a product for mobility solutions.
        </p>
        <p>I have worked on backend technologies to use full-stack apps in Ruby, Golang, and NodeJS. I worked on RoR application to handle requests and API communication. I worked within a Golang microservice that was built in Golang Lambdas which parsed CSV data from an S3 bucket and place that data on an SQS Queue to be consumed by a database.
        </p> 
        <p>I thoroughly enjoy building products and bringing a design to life, and architecture to life.
        </p>
        <div className="technologies">
          <h3>Front-End</h3>
          <h3>Back-End</h3>
        </div>
      </div>
    </section>
  )
};

export default Tech;
