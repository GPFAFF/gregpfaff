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
      </div>
      <div className="primary-color">
        <p>I have used a variety of technologies both front-end and back-end but my primary experience lies in web-based development. I am focused on React, JavaScript, HTML, and CSS.</p>
        <p>I have worked on full-stack applications in React/Redux/TypeScript building out a component library for a fortune 500 client as well as building a product for mobility solutions.</p>
      </div>
    </section>
  )
};

export default Tech;
