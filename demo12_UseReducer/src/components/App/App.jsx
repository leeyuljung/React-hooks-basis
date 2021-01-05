import React, { useReducer } from 'react';

function App(){
  const [ count, dispatch ] = useReducer((state, action) => {
    switch ( action ){
      case 'add':
        return state + 1

      case 'sub':
        return state - 1

      default: 
        return state
    }
  }, 0)
 
  return(
    <div>
      <p>The score is { count }</p>
      <button onClick={ () => { dispatch('sub') } }>Decrement</button>
      <button onClick={ () => { dispatch('add') } }>Increment</button>
    </div>
  )
}
 
export { App }