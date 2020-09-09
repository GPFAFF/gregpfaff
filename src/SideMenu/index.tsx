import React, {
  useContext,
} from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { navLinks } from '../constants';
import { AppContext } from '../Context';

import './index.scss';

const SideMenu = () => {
  const { state, dispatch } = useContext(AppContext);
  const isActive = state.active ? 'active' : '';
  const handleToggle = () => {
    dispatch({ type: 'HIDE' });
  };

  return (
    <ul className={`menu ${isActive}`}>
      <AiOutlineClose
        className="menu-close-icon"
        onClick={handleToggle}
      />
      {navLinks.map(({ url, name }) => (
        <li key={name}>
          <Link to={url}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default SideMenu;
