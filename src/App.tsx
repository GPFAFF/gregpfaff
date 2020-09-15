import React, {
  useContext,
  Suspense,
  lazy,
} from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

const BlockComponent = lazy(() => import('./Block'));
const HeaderComponent = lazy(() => import('./Header'));
const SidebarComponent = lazy(() => import('./Sidebar'));
const FooterComponent = lazy(() => import('./Footer'));
const NavComponent = lazy(() => import('./Nav'));
const SocialComponent = lazy(() => import('./Social'));
const SideMenuComponent = lazy(() => import('./SideMenu'));
const JumboTronComponent = lazy(() => import('./JumboTron'));
const AboutComponent = lazy(() => import('./About'));
// const ProjectsComponent = lazy(() => import('./Projects'));
const TechComponent = lazy(() => import('./Tech'));
const ContactComponent = lazy(() => import('./Contact'));

import Loading from './Loading';
import { AppContext } from './Context';

import './styles.scss';

const App = () => {
  const { dispatch } = useContext(AppContext);

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <div role="main">
          <HeaderComponent
            title="Greg Pfaff"
          />
          <SideMenuComponent />
          <section>
            <SidebarComponent className="sidebar">
              <NavComponent
                ariaLabel="Open side menu"
                onClick={() => dispatch({ type: 'ACTIVE' })}
              />
            </SidebarComponent>
            <JumboTronComponent />
            <SidebarComponent className="sidebar">
              <SocialComponent />
            </SidebarComponent>
            <BlockComponent className="block">
              <AboutComponent className="block-child" />
            </BlockComponent>
            <BlockComponent className="block">
              <TechComponent className="block-child" />
            </BlockComponent>
            <BlockComponent className="block">
              <ContactComponent className="block-child" />
            </BlockComponent>
            <BlockComponent className="block footer">
              <FooterComponent className="block-child" />
            </BlockComponent>
          </section>
        </div>
      </Suspense>
    </Router>
  );
};

export default App;
