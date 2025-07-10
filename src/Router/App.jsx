import React from 'react';
import {BrowserRouter  as Router, Routes, Route} from 'react-router-dom'
import Profile from './Profile'
import Projects from './Projects';
import About from './About'
import Navbar from './Navbar'
function App() {
  
  return (
    <div>
       <Router>
       <Routes>
       <Route path="/" element={<Profile/>}/>
       <Route path="/profile" element={<Profile/>}/>
       <Route path="/projects" element={<Projects/>}/>
       <Route path="/about" element={<About/>}/>
       </Routes>
       </Router>
    </div>
  );
}

export default App;
