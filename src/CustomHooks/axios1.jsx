import React, { useState } from 'react';
import axios from 'axios'
import UseFetch from './UseFetch';
import UseAlert from './UseAlert'
import UseForm from './UseForm'
function Axios1() {
    const[email, setEmail] =  useState('')
const[password, setPassword] = useState('')
const[error, setError] =  useState('')
function validation(){
  
const err = UseForm(email, password)
setError(err)
}
  return (
    <div>
     <input type="email" onChange={(e)=> setEmail(e.target.value)} />
     <input type="password" onChange={(e)=> setPassword(e.target.value)} />
     <button onClick={validation}></button>

     {error}
    </div>
  );
}

export default Axios1;
