import React from 'react';
import './index.scss';

interface Props {
  className: string;
}

const About = (props: Props) => {
  const { className } = props;

  return (
    <section
      id="about"
      className={className}
    >
      <div className="alternate-color">
        <h2>About Me</h2>
      </div>
      <div className="primary-color">
        <p>
        I started my career in tech recruiting. Specializing in everything web development at a 3rd party agency. After several years in boiler rooms, I decided to move in-house to a company called Razorfish. Razorfish offered tuition reimbursement and I made the case that "If I can take these development classes, I would be THAT much better at recruiting.".
        </p>
        <p>Long story short they said yes and I made the transition into a full-time developer, albeit with a lot of begging and pleading. Since 2015, I have done everything I can to soak up information and learn from those around me. I have made it my daily mission to listen and communicate to be a positive force to those around me.</p>
        <p>My specialties include most things web. I love bringing UI to life and working through the entire product delivery process. Whether it's whipping up POC's for different concepts, working through the requirements process to help deliver the best product, or getting together with my teammates to whiteboard a solution. I am very passionate about the collaboration process and bringing products from paper to screen.</p>
      </div>
    </section>
  )
};

export default About;
