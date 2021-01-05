// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';

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

//   componentDidMount(){
//     console.log(`componentDidMount ----> You click ${this.state.count} times.`);
//   }

//   componentDidUpdate(){
//     console.log(`componentDidUpdate ----> You click ${this.state.count} times.`);
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
  useEffect(() => {
    console.log(`useEffect ----> You click ${ count } times.`)
  });
  return(
    <div>
      <p>You click { count } times.</p>
      <button onClick={() => {setCount( count + 1 )}}>Click</button>
    </div>
  )
}
 
export { App }