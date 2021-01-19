import React, { Component } from 'react';
import store from '../../redux/store';

class App extends Component {
  constructor(props){
    super(props);
    this.state = store.getState();
  }

  render() { 
    return (
      <>
        <div>
          <input 
            type="text"
            placeholder="Write something..."
          />
          <button>Add</button>
        </div>
        <div>
          <ul>
            <li>React</li>
          </ul>
        </div>
      </>
    )
  }
}
 
export default App;