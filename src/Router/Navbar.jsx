import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div>
<Link to="/projects">projects</Link>
<Link to="/profile">profile</Link>
<Link to="/about">about</Link>
    </div>
  );
}

export default Navbar;
