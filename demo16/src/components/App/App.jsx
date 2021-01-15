import React, { useState, useEffect, useCallback } from 'react';

function useWindowSize(){
  const [ size, setSize ] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })

  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [onResize])

  return size;
}

function App(){
  const size = useWindowSize();
  return <p>Window Size： { size.width } x { size.height }</p>
}

export default App;