import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Index } from '../Index';
import '../../styles/index.css';

class App extends Component {
  render(){
    return(
      <Router>
        <div className="container">
          <div className="leftNav">
            <h3>Nav</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="">Video</Link></li>
              <li><Link to="">Work</Link></li>
            </ul>
          </div>
          <div className="main">
            <Route path="/" exact component={Index}/>
          </div>
        </div>
      </Router>
    )
  }
}
 
export { App } ;