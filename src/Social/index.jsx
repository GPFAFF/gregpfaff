import React from 'react';
import { FiMail } from 'react-icons/fi';
import { FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { socialLinks } from '../constants';

import './index.scss';

export const Social = () => {
  return (
    <div className="social-links">
      {socialLinks.map(({ target, icon, name }) =>
        <a key={name} href={target}>
          <span className="visuallyhidden">{name}</span>
          {icon}
        </a>
      )}
    </div>
  )
}