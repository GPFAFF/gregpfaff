import React from 'react';
import { socialLinks } from '../constants';

import './index.scss';

const Social = () => (
  <div className="social-links">
    {socialLinks.map(({ target, icon, name }) => (
      <a key={name} href={target}>
        <span className="visuallyhidden">{name}</span>
        {icon}
      </a>
    ))}
  </div>
);

export default Social;
