import React from 'react';
import ShowArea from '../ShowArea/ShowArea';
import Buttons from '../Buttons/Buttons';
import { Colors } from '../Colors/Colors';

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

export default App;