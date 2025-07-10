import React, { createContext, useContext } from 'react';
import { useState } from 'react';
function Comp1() {
  return (
  <Grandparent/>
  );
}
const ToyContext = createContext()
const ThemeContext =  createContext()
const LanguageContext  =  createContext()
function Grandparent(){
   const[toy, setToy] =  useState("Доп")
   const[theme, setTheme] =  useState("red")
   const[lang, setLang] = useState('kz')
  return(
    <div>
    <LanguageContext.Provider value={{
      lang,setLang
    }}></LanguageContext.Provider>
    <ThemeContext.Provider value={theme}>
      <ToyContext.Provider value={toy}>
     <Parent/>
    </ToyContext.Provider>
    </ThemeContext.Provider>
    </div>

  )
}
function Parent(){
  return <Child/>
}
function Child(){
  const toy =  useContext(ToyContext)
  const theme = useContext(ThemeContext)
  const lang= useContext(LanguageContext)
  return(
    <div style={{
      backgroundColor: theme
    }}>
      <select onChange={(e)=> lang.setLang(e.target.value)}>
        <option value="kz">kz</option>
         <option value="ru">ru</option>
          <option value="en">en</option>
      </select>
     <p>{lang.lang==='kz' ? 'Менің ойыншығым' : lang.lang==='ru' ? 'Моя игрушка': "Му ball"}</p> 
    </div>
  
  
  )
}

export default Comp1;
