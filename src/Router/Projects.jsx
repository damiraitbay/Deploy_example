import React from 'react';
import { useNavigate } from 'react-router-dom';

function Projects() {
  const navigate = useNavigate()
  return (
    <div>
      Projects
       <button onClick={()=> navigate('/about')}>about me</button>
    </div>
  );
}

export default Projects;
