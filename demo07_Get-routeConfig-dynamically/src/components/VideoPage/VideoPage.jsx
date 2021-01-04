import React, { Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
import { ReactVideo } from '../ReactVideo';
import { VueVideo } from '../VueVideo';
import { FlutterVideo } from '../FlutterVideo';
 
function VideoPage(){
  return(
    <Fragment>
      <div className="topNav">
        <ul>
          <li><Link to="/video/react-video">React</Link></li>
          <li><Link to="/video/vue-video">Vue</Link></li>
          <li><Link to="/video/flutter-video">Flutter</Link></li>
        </ul>
      </div>

      <div className="content">
        <h4>Video List</h4>
        <Route path="/video/react-video" component={ ReactVideo }/>
        <Route path="/video/vue-video" component={ VueVideo }/>
        <Route path="/video/flutter-video" component={ FlutterVideo }/>
      </div>
    </Fragment>
  )
}

export { VideoPage }