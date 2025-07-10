import React, { useState } from 'react';
import Comp1 from './Comp1'
function UseContext() {
  return <Grandparent/>
}
function Grandparent(){
  const toy =  'Робот'
  return <Parent toy={toy}/>
}

function Parent({toy}){
  return <Child toy={toy}/>
}
function Child({toy}){
  return <p>Менің ойыншығым: {toy}</p>
}
export default UseContext;


