import React from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate()
  return (
    <div>
      Profile
      <button onClick={()=> navigate('/projects')}>projects</button>
    </div>
  );
}

export default Profile;
