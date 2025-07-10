import icon from '/icons8-search.svg'
import menu from '/menu.png'
import save from '/icons8-save.svg'
import { useState } from 'react'

function Notes_app(){

  const[clicked, setClicked] =  useState(false)
    return(
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around'
      }}>
        <img src={menu} style={{
            width: '25px'
        }}alt=""/>
        <p>Home</p>
        <img src={icon} style={{
            width: '25px'
        }}alt=""/>
      </div>
      <div style={{
        width: '400px', 
        height:'400px', 
        border: '1px solid black', 
        backgroundColor: 'gray',
      }}>
        <div style={{
            display: 'flex', 
            justifyContent: 'space-between'
        }}>
                <h1>Card number 1</h1> <img src={save} style={{
                    backgroundColor: clicked ? 'orange': 'white',
                }}onClick={()=> {
                    setClicked(!clicked)
                }} alt=""/>
        </div>
    
        <p>sdlkcsldkmlsdk</p>
      </div>
    </div>)
}

export default Notes_app