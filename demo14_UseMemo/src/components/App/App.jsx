// import React, { useState } from 'react';
import React, { useState, useMemo } from 'react';

function App(){
  const [ CokeNum, setCokeNum ] = useState(0);
  const [ BeerNum, setBeerNum ] = useState(0);
  // const BeerText = `Get beer： ${ BeerNum }, Date： ${new Date().getTime()}`; 
  const BeerText = useMemo(() => `Get beer： ${ BeerNum }, Date： ${new Date().getTime()}`, [BeerNum]); 

  return(
    <>
      <div>{ CokeNum }</div>
      <button onClick={() => {setCokeNum( CokeNum + 1 )}}>Coke</button>
      <div>{ BeerNum }</div>
      <button onClick={() => {setBeerNum( BeerNum + 1 )}}>Beer</button>

      <div>{ BeerText }</div>
    </>
  )
}

export default App;