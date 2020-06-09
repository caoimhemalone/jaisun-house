import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */
import App from './components/App';
import HomePage from './components/pages/Home';
import AboutPage from './components/pages/About';
import BrandsPage from './components/pages/Brands';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/about-us" component={AboutPage} />
    <Route path="/brands" component={BrandsPage} />
  </Route>
);