import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Posts from './Posts';
import PostDetails from './Post_details';
function App() {
  return (
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<Posts/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/posts/:id" element={<PostDetails/>}/>
      </Routes>
    </Router>
  </div>
  );
}

export default App;
