import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main'
import About from './About'
import Profile from './Profile';
import Home from './Home';
import Info from './Info';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login'
function App() {
  const[isAuth, setAuth] =  useState(false)
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/profile" element={
            <ProtectedRoute isAuth={isAuth}>
              <Profile/>
            </ProtectedRoute>
          }/>
          <Route path="/home" element={<Home/>}/>
          <Route path="info" element={<Info/>}/>
          <Route path='/login' element={<Login setAuth={setAuth}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
