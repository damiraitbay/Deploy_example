import React, { createContext, useContext, useState } from 'react';
function Comp2() {
   
  return (
    <div>
      <Grandparent/>
      
    </div>
  );
}
const ToyContext = createContext()
const ThemeContext = createContext()
function Grandparent(){
const[toy, setToy] =  useState('Robot')
const[theme, setTheme] =  useState('light')
  return(
    <ThemeContext.Provider value={{theme, setTheme}}>
      <ToyContext.Provider value={{toy, setToy}}>
  <Parent/>
  <Child/>
</ToyContext.Provider>
    </ThemeContext.Provider>

  )
}
function Child(){
  const toy =  useContext(ToyContext)
  const theme = useContext(ThemeContext)
  return(
    <div style={{
      backgroundColor: theme.theme=='dark'? 'black' : 'white'
    }}>
      <p>Менің ойыншығым: {toy.toy}</p>
      <button onClick={()=> toy.setToy('ball')}>Өзгерту</button>
      <button onClick={()=> theme.setTheme(theme.theme=='dark' ? 'light' : 'dark')}> {theme.theme=='dark' ? 'dark' : 'light'}  </button>
    </div>
  )
}
function Parent(){
  const toy =  useContext(ToyContext)
  return(
    <div>
      <p>Сенің ойыншығың: {toy.toy}</p>
    </div>
  )
}

export default Comp2;
