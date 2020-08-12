import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from './Context';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

ReactDOM.render(
  <AppProvider>
    <Router>
      <App />
    </Router>
  </AppProvider>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}