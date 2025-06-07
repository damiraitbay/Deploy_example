import React, { useState } from 'react';
function Ternary() {
     const[page, setPage] =  useState('first_page')

     if(page=='first_page'){
       return (
        <div>
             <button onClick={()=> setPage('login')}>login</button>
   <button onClick={()=> setPage('register')}>register</button>
        </div>

  )
     }else if(page=='login'){
      return(
        <div>
          login
        </div>
      )
     }else if(page=='register'){
      return(
        <div>
          Register
        </div>
      )
     }
 
}

export default Ternary;
