import axios from 'axios';
import { useState } from 'react';
function Axios() {
  const[res, setRes] =  useState('')
  const[name, setName ] =useState('')
  const[email, setEmail] = useState('')
  const[username, setusername] = useState('')
  function send(){
axios.post('https://683ffb195b39a8039a5658ce.mockapi.io/users', {
  name: name, 
  email: email, 
  username: username,
  phone: '', 
  password: '', 
  confirm_password: ''
})
.then(response=> setRes("Cұраныс жіберілді" +response.data.id))
  }


 return(
    <div>
      <input type="text" onChange={(e)=> setName(e.target.value)}/>
    <input type="email" onChange={(e)=> setEmail(e.target.value)}/>
    <input type="username" onChange={(e)=> setusername(e.target.value)}/>
      <button onClick={send}>send</button>
      
    </div>
 )
}
export default Axios;
