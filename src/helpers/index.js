import React from 'react';
import { navLinks } from '../constants';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

export const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export const returnPath = (path) => {
  switch(path) {
    case "/":
      return {
        pathName: '/about',
        routeName: 'About',
        icon: <FaArrowDown />
      };
    case "/about":
      return {
        pathName: '/projects',
        routeName: 'Projects',
        icon: <FaArrowDown />
      };
    case "/projects":
      return {
        pathName: '/contact',
        routeName: 'Contact',
        icon: <FaArrowDown />
      };
    case "/contact":
      return {
        pathName: '/',
        routeName: 'Home',
        icon: <FaArrowUp />
    };
    default:
      return null
  }
}