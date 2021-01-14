import React, { useRef, useState, useEffect } from 'react';

function App(){
  const inputEl = useRef(null);
  const showValue = () => {
    inputEl.current.value = 'Hello, react';
    console.log(inputEl);
  }

  const [text, setText] = useState('Hi');
  const textRef = useRef();

  useEffect(() => {
    textRef.current = text;
    console.log('textRef.current:', textRef.current);
    console.log(textRef);
  })
 
  return(
    <>
      <input ref={ inputEl } type="text" />
      <button onClick={ showValue }>Show input value</button>
      <br />
      <br />
      <input value={text} onChange={(e) => {setText(e.target.value)}} type="text" />
    </>
  )
}

export default App;