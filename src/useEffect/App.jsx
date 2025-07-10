import React, { useState } from 'react';
import Child from './Child'
function App() {
  const[state, setState] =  useState(false)
  function add(){
     setState(!state)
  }
  return (
    <div>
      { state && <Child/>
      }


      <button onClick={add}>add</button>
    </div>
  );
}

export default App;
