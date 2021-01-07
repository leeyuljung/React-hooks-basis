import React, { useContext } from 'react';
import { ColorContext, COLOR_UPDATE } from '../Colors';

function Buttons(){
  const { dispatch } = useContext(ColorContext);

  return(
    <div>
      <button onClick={ () => {dispatch({ type: COLOR_UPDATE, color: 'yellow' })} }>Yellow</button>
      <button onClick={ () => {dispatch({ type: COLOR_UPDATE, color: 'red' })} }>Red</button>
    </div>
  )
}

export { Buttons };