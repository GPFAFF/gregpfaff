import React, {
  useContext,
  Suspense,
} from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Loading from './Loading';
import { AppContext } from './Context';

import './styles.scss';

import Block from './Block';
import Header from './Header';
import Sidebar from './Sidebar';
import Nav from './Nav';
import Social from './Social';
import SideMenu from './SideMenu';
import JumboTron from './JumboTron';
import About from './About';
import Projects from './Projects';
import Tech from './Tech';
import Contact from './Contact';

const App = () => {
  const { dispatch } = useContext(AppContext);

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <div role="main">
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
            <Block className="block">
              <About className="block-child" />
            </Block>
            <Block className="block">
              <Projects className="block-child" />
            </Block>
            <Block className="block">
              <Tech className="block-child" />
            </Block>
            <Block className="block">
              <Contact className="block-child" />
            </Block>
          </section>
        </div>
      </Suspense>
    </Router>
  );
};

export default App;
