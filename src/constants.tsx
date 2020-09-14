import React from 'react';
import { FiMail } from 'react-icons/fi';
import {
  Typescript,
  Ruby,
  Javascript,
  Amazonaws,
  Redux,
  Jest,
  Rubyonrails,
} from "@icons-pack/react-simple-icons";
import { AiOutlineApi, AiOutlinePullRequest } from 'react-icons/ai';
import { GoRuby } from 'react-icons/go';
import { GrAccessibility, GrGolang } from 'react-icons/gr';
import {
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaSass,
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
} from 'react-icons/fa';
import { Golang } from './icons/golang';

export const socialLinks = [
  {
    name: 'Email Greg',
    target: 'mailto:greg.pfaff@gmail.com',
    icon: <FiMail />,
  },
  {
    name: "Check out Greg's Twitter",
    target: 'https://twitter.com/thegpfaff',
    icon: <FaTwitter />,
  },
  {
    name: "Check out Greg's Github",
    target: 'https://github.com/gpfaff',
    icon: <FaGithub />,
  },
  {
    name: "Check out Greg's LinkedIn",
    target: 'https://www.linkedin.com/in/gpfaff',
    icon: <FaLinkedinIn />,
  },
];

export const navLinks = [
  { url: '#home', name: 'Home' },
  { url: '#about', name: 'About' },
  { url: '#projects', name: 'Projects' },
  { url: '#tech', name: 'Technology' },
  { url: '#contactForm', name: 'Contact Me' },
];

export const logos = [
  {
    name: 'React',
    icon: <FaReact />,
  },
  {
    name: 'JavaScript',
    icon: <Javascript />,
  },
  {
    name: 'Typescript',
    icon: <Typescript />,
  },
  {
    name: 'Redux',
    icon: <Redux />,
  },
  {
    name: 'sass',
    icon: <FaSass />,
  },
  {
    name: 'HTML5',
    icon: <FaHtml5 />,
  },
  {
    name: 'CSS3',
    icon: <FaCss3 />,
  },
  {
    name: 'Accessibility',
    icon: <GrAccessibility />,
  },
  {
    name: 'NodeJS',
    icon: <FaNodeJs />,
  },
  {
    name: 'Jest Testing',
    icon: <Jest />,
  },
  {
    name: 'AWS',
    icon: <Amazonaws />,
  },
  {
    name: 'Ruby',
    icon: <GoRuby />,
  },
  {
    name: 'Rails',
    icon: <Rubyonrails />,
  },
  {
    name: 'Golang',
    icon: <Golang />,
  },
  {
    name: 'APIs',
    icon: <AiOutlineApi />,
  },
  {
    name: 'Git',
    icon: <AiOutlinePullRequest />,
  },
]
