import React from 'react';
import './index.scss';
import { logos } from '../constants';

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
      <div className="primary-color">
        <h2>Technologies</h2>
        <div className="technologies">
          {logos.map((logo: any, i: number) => {
            const { icon, name } = logo;
            return (
              <div key={i}>
                <span className="visuallyhidden">{name}</span>
                {icon}
              </div>
            )})}
        </div>
      </div>
      <div className="alternate-color">
        <p>I have used a variety of technologies both front-end and back-end but my primary experience lies in web-based technologies. I mostly focus on single page web applications. I have worked on full-stack applications in React/Redux/TypeScript building out a component library for a fortune 500 client as well as building a product for mobility solutions. I have worked within vanilla JS environments and a variety of different react apps.
            <br /><br />
          I have worked on backend technologies within full-stack apps in Ruby, Golang, and NodeJS. I worked on RoR application to handle requests and API communication. I worked within a Golang microservice that was built in Golang Lambdas which parsed CSV data from an S3 bucket and place that data on an SQS Queue to be consumed by a database. And have used NodeJS in several instances to create a server-side app that can handle auth and login as well as managing a users profile.
              <br/><br/>
          All in all I thoroughly enjoy building products and bringing a design, product, or architecture to life. I love to make apps accessible and more performant for the end-user and collaborating alongside my fellow engineers to make sure everyone is thrilled with the result.
        </p>
      </div>
    </section>
  )
};

export default Tech;
