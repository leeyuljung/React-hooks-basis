import React, { useContext } from 'react';
import { ColorContext } from '../Colors/Colors';

function ShowArea(){
  const { color } = useContext(ColorContext);

  return(
    <div style={{ color }}>Font color is { color }</div>
  )
}

export default ShowArea;