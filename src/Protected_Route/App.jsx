import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import ProtectedRoute from './ProtectedRoute';
import { useState } from 'react';
function App() {
    const[isLogin, setLogin] =  useState(false)
  return (
    <div>
      <Router>
        <Routes>
            <Route path='/login' element={<Login setLogin={setLogin}/>}/>
            <Route path="/dashboard" element={
                <ProtectedRoute isLogin={isLogin}>
                    <Dashboard/>
                </ProtectedRoute>
                }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
