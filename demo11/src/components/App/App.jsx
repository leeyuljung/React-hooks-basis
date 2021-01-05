import React, { useState, createContext, useContext } from 'react';

const CountContext = createContext();

function App(){
  const [ count, setCount ] = useState(0);

  return(
    <div>
      <p>You click { count } times.</p>
      <button onClick={() => {setCount( count + 1 )}}>Click</button>
      <CountContext.Provider value={ count }>
        <Counter />
      </CountContext.Provider>
    </div>
  )
}

// child component
function Counter(){
  let count = useContext(CountContext); 
  return <h3>{ count }</h3>
}
 
export { App }