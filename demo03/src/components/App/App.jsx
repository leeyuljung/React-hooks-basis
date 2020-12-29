import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Index = () => (<div>This is Home-Page.</div>);
const List = () => (<div>This is List-Page.</div>);

const App = () => (
  <Router>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/list">List</Link></li>
    </ul>
    {/* exact --> 精準匹配路徑 */}
    <Route path="/" exact component={Index} />
    <Route path="/list" component={List} />
  </Router>
)

export { App }