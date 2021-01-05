// import React, { Component } from 'react';
import React, { useState } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {  
//       count: 0
//     }
//     this.addCount = this.addCount.bind(this);
//   }

//   addCount(){
//     this.setState({
//       count: this.state.count + 1
//     });
//   }

//   render() { 
//     return (  
//       <div>
//         <p>You click { this.state.count } times.</p>
//         <button onClick={ this.addCount }>Click</button>
//       </div>
//     );
//   }
// }

function App(){
  const [ count, setCount ] = useState(0);
  return(
    <div>
      <p>You click { count } times.</p>
      <button onClick={() => {setCount( count + 1 )}}>Click</button>
    </div>
  )
}
 
export { App }