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

const HeaderComponent = React.lazy(() => import('./Header'));
const SidebarComponent = React.lazy(() => import('./Sidebar'));
const FooterComponent = React.lazy(() => import('./Footer'));
const NavComponent = React.lazy(() => import('./Nav'));
const SocialComponent = React.lazy(() => import('./Social'));
const SideMenuComponent = React.lazy(() => import('./SideMenu'));
const JumboTronComponent = React.lazy(() => import('./JumboTron'));
const AboutComponent = React.lazy(() => import('./About'));
const ProjectsComponent = React.lazy(() => import('./Projects'));
const ContactComponent = React.lazy(() => import('./Contact'));

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
          <HeaderComponent
            title="Greg Pfaff"
          />
          <SideMenuComponent />
          <section>
            <SidebarComponent className="sidebar">
              <NavComponent
                ariaLabel="Open side menu"
                onClick={() => dispatch({ type: "ACTIVE" })}
              />
            </SidebarComponent>
            <JumboTronComponent />
            <SidebarComponent className="sidebar">
              <SocialComponent />
            </SidebarComponent>
            <Link
              smooth to="#about"
              className="nav-arrow"
              tabIndex="0"
              aria-label="Navigate to about section"
            >
              <FaArrowDown />
            </Link>
            <Block className="block">
              <AboutComponent className="block"/>
            </Block>
            <Block className="block">
              <ProjectsComponent className="block"/>
            </Block>
            <Block className="block">
              <ContactComponent className="block" />
            </Block>
            <Block className="block">
              <FooterComponent className="block" />
            </Block>
          </section>
        </div>
      </Suspense>
    </Router>
  )
};

export default App;
