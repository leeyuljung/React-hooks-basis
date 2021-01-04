import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { Index } from '../Index';
import { News } from '../News';
import { Home } from '../Home';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      newsList: [
        {cid: 123, title: 'Sport'},
        {cid: 456, title: 'Gossip'},
        {cid: 789, title: 'Economics'}
      ]
    }
  }

  render(){
    return(
      <Router>
        <Redirect to="/home/" />
        <ul>
          <li><Link to="/">Index</Link></li>
          { 
            this.state.newsList.map((item, index) => (
              <li key={index}>
                <Link to={ "/news/" + item.cid }>{item.title}</Link>
              </li>  
            ))
          }
        </ul>

        <Route path="/" exact component={Index} />
        <Route path="/home" component={Home} />
        <Route path="/news/:id" component={News} />
      </Router>
    )
  }
}
 
export { App } ;