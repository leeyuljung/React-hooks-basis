import React, { createContext, useReducer } from 'react';

export const ColorContext = createContext();

// 宣告 action 常量
export const COLOR_UPDATE = 'COLOR_UPDATE';

const reducer = (state, action) => {
  switch( action.type ){
    case COLOR_UPDATE:
      return action.color

    default:
      return state
  }
}

export const Colors = props => {
  const [ color, dispatch ] = useReducer( reducer, 'blue' );

  return(
    <ColorContext.Provider value={{ color, dispatch }}>
      { props.children }
    </ColorContext.Provider>
  ) 
}