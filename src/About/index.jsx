import React from 'react';

const About = ({ className, ref }) => (
  <section
    id="about"
    className={className}
    ref={ref}
  >
    <div className="alternate-color">
      <h2>About Me</h2>
    </div>
    <div className="primary-color">
      <p>
        Lorem Ipsum Lorem Ipsum
        Lorem Ipsum Lorem Ipsum
        Lorem Ipsum Lorem Ipsum
        Lorem Ipsum Lorem Ipsum
        Lorem Ipsum Lorem Ipsum
      </p>
    </div>
  </section>
);

export default About;
