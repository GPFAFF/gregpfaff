import React, {
  Fragment,
  useState,
  useContext
} from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import { Nav } from './Nav';
import { Social } from './Social';
import { SideMenu } from './SideMenu';
import { JumboTron } from './JumboTron';
import { About } from './About';
import { Projects } from './Projects';
import { Resume } from './Resume';
import { Contact } from './Contact';
import { FaArrowDown } from 'react-icons/fa';
import { initialState, toggleReducer } from './reducers/toggle';
import { AppProvider, AppContext } from './Context';

import './styles.scss';

const App = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <Router>
      <div>
        <Header
          title="Greg Pfaff"
        />
        <SideMenu />
        <section>
          <Sidebar className="sidebar">
            <Nav
              onClick={() => dispatch({ type: "ACTIVE" })}
            />
          </Sidebar>
          <JumboTron />
          <Sidebar className="sidebar">
            <Social />
          </Sidebar>
          <div className="nav-arrow">
            <FaArrowDown />
          </div>
          <About className="block" />
          <Projects className="block" />
          <Resume className="block" />
          <Contact className="block" />
        </section>
      </div>
    </Router>
  )
};

export default App;
