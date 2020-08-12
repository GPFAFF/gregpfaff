import React, {
  Fragment,
  useState,
  useContext,
  Suspense
} from 'react';
import {
  Switch,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { navLinks } from './constants.js';

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

import { Loading } from './Loading';
import { NavigationArrow } from './NavigationArrow';
import { initialState, toggleReducer } from './reducers/toggle';
import { AppProvider, AppContext } from './Context';

import './styles.scss';

const App = () => {
  const { state, dispatch } = useContext(AppContext);
  const { pathname } = useLocation();

  return (
    <Fragment>
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
            <section role="main">
              <Switch>
                <Route exact path="/">
                  <JumboTronComponent />
                </Route>
                <Route path="/about">
                  <AboutComponent />
                </Route>
                <Route path="/projects">
                  <ProjectsComponent className="projects" />
                </Route>
                <Route path="/contact">
                  <ContactComponent />
                </Route>
              </Switch>
            </section>
            <SidebarComponent className="sidebar">
              <SocialComponent />
            </SidebarComponent>
          </section>
          <NavigationArrow
            path={pathname}
          />
        </div>
      </Suspense>
    </Fragment>
  )
};

export default App;
