import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Index } from '../Index';
import { VideoPage } from '../VideoPage';
import { ArticlePage } from '../ArticlePage';
import '../../styles/index.css';

class App extends Component {
  render(){
    let routeConfig = [
      { path: "/", title: "Home",exact: true, component: Index },
      { path: "/video", title: "Video", exact: false, component: VideoPage },
      { path: "/article", title: "Article", exact: false, component: ArticlePage }
    ]

    return(
      <Router>
        <div className="container">
          <div className="leftNav">
            <h3>Nav</h3>
            <ul>
              {
                routeConfig.map((item, index) => {
                  return(
                    <li key={index}><Link to={item.path}>{item.title}</Link></li>
                  )
                })
              }
              {/* <li><Link to="/">Home</Link></li>
              <li><Link to="/video">Video</Link></li>
              <li><Link to="/article">Article</Link></li> */}
            </ul>
          </div>
          <div className="main">
            {
              routeConfig.map((item, index) => {
                return(
                  <Route key={index} path={item.path} exact={item.exact} component={item.component}/>
                )
              })
            }
            {/* <Route path="/" exact component={ Index }/>
            <Route path="/video" component={ VideoPage }/>
            <Route path="/article" component={ ArticlePage }/> */}
          </div>
        </div>
      </Router>
    )
  }
}
 
export { App } ;