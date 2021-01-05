import React, { useState, createContext, useContext } from 'react';

const CountContext = createContext();

function App(){
  const [ count, setCount ] = useState(0);

  return(
    <div>
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
  return <p>You click { count } times.</p>
}
 
export { App }