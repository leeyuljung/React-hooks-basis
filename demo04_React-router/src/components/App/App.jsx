import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Index } from '../Index';
import { List } from '../List';

const App = () => (
  <Router>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/list">List</Link></li>
    </ul>
    <Route path="/" exact component={Index} />
    <Route path="/list" component={List} />
  </Router>
)
 
export { App } ;