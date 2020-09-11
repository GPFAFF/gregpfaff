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
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium itaque aspernatur voluptatum autem nobis ullam ea debitis quo modi quibusdam vero, odit voluptatem accusamus, aut facilis adipisci asperiores eos facere?</p>
       </div>
    </section>
  )
};

export default Tech;
