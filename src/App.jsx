import React, {
  Fragment,
  useState,
  useContext,
  Suspense,
} from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import { Block } from './Block';
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

// const HeaderComponent = React.lazy(() => import('./Header'));
// const SidebarComponent = React.lazy(() => import('./Sidebar'));
// const FooterComponent = React.lazy(() => import('./Footer'));
// const NavComponent = React.lazy(() => import('./Nav'));
// const SocialComponent = React.lazy(() => import('./Social'));
// const SideMenuComponent = React.lazy(() => import('./SideMenu'));
// const JumboTronComponent = React.lazy(() => import('./JumboTron'));
// const AboutComponent = React.lazy(() => import('./About'));
// const ProjectsComponent = React.lazy(() => import('./Projects'));
// const ContactComponent = React.lazy(() => import('./Contact'));

import Loading from './Loading';
import { FaArrowDown } from 'react-icons/fa';
import { initialState, toggleReducer } from './reducers/toggle';
import { AppProvider, AppContext } from './Context';

import './styles.scss';

const App = () => {
  const { dispatch } = useContext(AppContext);

  return (
    <Router>
      <Suspense fallback={<Loading/>}>
        <div>
          <Header
            title="Greg Pfaff"
          />
          <SideMenu />
          <section>
            <Sidebar className="sidebar">
              <Nav
                ariaLabel="Open side menu"
                onClick={() => dispatch({ type: "ACTIVE" })}
              />
            </Sidebar>
            <JumboTron />
            <Sidebar className="sidebar">
              <Social />
            </Sidebar>
            <Link
              smooth to="#about"
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
  )
};

export default App;
