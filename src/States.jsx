import React, { useState } from 'react';

function States() {


  const[value, setValue] = useState('')
  const[text, setText] =useState('')
  return (
    
    <div>
     <input type="text" onChange={()=> {
      
     }}/>
     <p>{text}</p>
    </div>
  );
}

export default States;
