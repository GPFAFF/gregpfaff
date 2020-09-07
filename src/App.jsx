import React, {
  useContext,
  Suspense,
} from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import { FaArrowDown } from 'react-icons/fa';
import Block from './Block';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Nav from './Nav';
import Social from './Social';
import SideMenu from './SideMenu';
import JumboTron from './JumboTron';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

import Loading from './Loading';
import { AppContext } from './Context';

import './styles.scss';

const App = () => {
  const { dispatch } = useContext(AppContext);

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <div>
          <Header
            title="Greg Pfaff"
          />
          <SideMenu />
          <section>
            <Sidebar className="sidebar">
              <Nav
                ariaLabel="Open side menu"
                onClick={() => dispatch({ type: 'ACTIVE' })}
              />
            </Sidebar>
            <JumboTron />
            <Sidebar className="sidebar">
              <Social />
            </Sidebar>
            <Link
              smooth
              to="#about"
              className="nav-arrow"
              tabIndex="0"
              aria-label="Navigate to about section"
            >
              <FaArrowDown />
            </Link>
            <Block className="block">
              <About className="block-child" />
            </Block>
            <Block className="block">
              <Projects className="block-child" />
            </Block>
            <Block className="block">
              <Contact className="block-child" />
            </Block>
            <Block className="block footer">
              <Footer className="block-child" />
            </Block>
          </section>
        </div>
      </Suspense>
    </Router>
  );
};

export default App;
