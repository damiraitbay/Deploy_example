import { useEffect , useState} from "react"
import axios from 'axios'
function Child(){
    const[email, setEmail] =  useState("")
    const[password, setPassword] =  useState('')
    const[response, setResponse] = useState("")
    const[data, setData] = useState([])
  function send(){
    axios.post('https://683ffb195b39a8039a5658ce.mockapi.io/users', {
        email: email, 
        password: password
    })
    .then(res => setResponse('Өтінім жіберілді' + res.data.id))

    
  }

  function get_data(){
    axios.get('https://683ffb195b39a8039a5658ce.mockapi.io/users')
    .then(res => setData(res.data))
  }
  useEffect(()=> {
        console.log(response)
    }, [response])
  
return(
    <div>
         <input type="email" onChange={(e)=> setEmail(e.target.value)}/>
          <input type="password" onChange={(e)=> setPassword(e.target.value)}/>
          <button onClick={send}>submit</button>
          {response}
          <button onClick={get_data}>Деректерді алу</button>
          {data.map((n)=>{
            return(
                <div>
                    <p>{n.name}</p>
                    <p>{n.email}</p>
                    <p>{n.username}</p>
                    <p>{n.phone}</p>
                    <p>{n.password}</p>
                    <p>{n.confirm_password}</p>
                </div>
            )
          })}
    </div>
)
}
export default Child