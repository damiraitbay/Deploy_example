import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login({setAuth}) {
  const navigate = useNavigate()
  function handleLogin(){
      setAuth(true)
     navigate('/profile')
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
