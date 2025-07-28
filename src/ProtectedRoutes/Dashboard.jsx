import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
const navigate =  useNavigate()
  function log(){
      navigate('/about')
  }
  return (
    <div>
      Wecome to Dashboard
      <button onClick={log}>about</button>
    </div>
  );
}

export default Dashboard;
