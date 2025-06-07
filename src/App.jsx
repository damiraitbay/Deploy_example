import './App.css'
import Example from './Example';
import {useState} from 'react'
import Protected_Routes from './Protected_Routes';
import Dashboard from './Dashboard'
import Login from './Login'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App(){
const[isAuthenticated, setAuthenticate ] = useState(false)
  return(
<BrowserRouter>
   <Routes>
    <Route path="/login"
    element={<Login setAuthenticate={setAuthenticate}/>}/>
    <Route path="/dashboard" element={
      <Protected_Routes isAuthenticated={isAuthenticated}>
        <Dashboard/>
      </Protected_Routes>
    }/>
   </Routes>
</BrowserRouter>

  )
}
export default App

