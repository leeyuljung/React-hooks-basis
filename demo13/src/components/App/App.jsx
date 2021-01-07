import React from 'react';
import { ShowArea } from '../ShowArea';
import { Buttons } from '../Buttons';
import { Colors } from '../Colors';

function App(){
 
  return(
    <div>
      <Colors>
        <Buttons />
        <ShowArea />
      </Colors>
    </div>
  )
}
 
export { App }