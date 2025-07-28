import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login({setLogin}) {
  const navigate = useNavigate('')
  return (
    <div>
      <button onClick={()=>{
        setLogin(true)
         navigate('/dashboard')
      }}>Login</button>
    </div>
  );
}

export default Login;
