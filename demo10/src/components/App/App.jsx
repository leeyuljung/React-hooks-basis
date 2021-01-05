import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Index(){
  useEffect(() => {
    console.log('Index page is built.');
    return () => {
      console.log('Index page is disappered.');
    }
  }, [])
  return <div>This is Index page.</div>
}

function List(){
  useEffect(() => {
    console.log('List page is built.');
    return () => {
      console.log('List page is disappered.');
    }
  }, [])
  return <div>This is List page.</div>
}

function App(){
  const [ count, setCount ] = useState(0);

  useEffect(() => {
    console.log(`useEffect ----> You click ${ count } times.`)
    return () => {
      console.log('------')
    }
  },[count]);

  return(
    <div>
      <p>You click { count } times.</p>
      <button onClick={() => {setCount( count + 1 )}}>Click</button>

      <Router>
        <ul>
          <li><Link to="/">Index</Link></li>
          <li><Link to="/list">List</Link></li>
        </ul>

        <Route path="/" exact component={ Index }/>
        <Route path="/list" component={ List }/>
      </Router>
    </div>
  )
}
 
export { App }