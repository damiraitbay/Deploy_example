import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate()
  return (
    <div>
      About
      <button onClick={()=> navigate('/profile')}>About</button>
    </div>
  );
}

export default About;
