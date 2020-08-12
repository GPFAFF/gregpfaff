import React from 'react';
import { FiMail } from 'react-icons/fi';
import { FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';

export const socialLinks = [
  {
    name: "Email Greg",
    target: "mailto:greg.pfaff@gmail.com",
    icon:  <FiMail />
  },
  {
    name: "Check out Greg's Twitter",
    target: "https://twitter.com/thegpfaff",
    icon: <FaTwitter />
  },
  {
    name: "Check out Greg's Github",
    target: "https://github.com/gpfaff",
    icon: <FaGithub />
  },
  {
    name: "Check out Greg's LinkedIn",
    target: "https://www.linkedin.com/in/gpfaff",
    icon: <FaLinkedinIn />
  }
]

export const navLinks = [
  { url: '#home', name: 'Home' },
  { url: '#about', name: 'About' },
  { url: '#projects', name: 'Projects' },
  { url: '#contact', name: 'Contact Me' },
];
