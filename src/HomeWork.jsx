import { useState } from "react"
import './App.css'
function HomeWork(){
    const[isRegister, setRegister] = useState(false)
    const[isLogin, setLogin]  = useState(false)
    return(
<div>
    {
   isRegister ?   
   <div className="register">
    <h1>Register Form</h1>
    <input type="text" name="" value=""/>
    <input type="text" name="" value=""/>
    <button type="" onClick={()=> setRegister(!isRegister)}>Register</button>
</div> : isLogin ?
   <div className="login">
    <h1>Бастапқы бетке қош келдіңіз</h1>
    <button type="" onClick={()=> setLogin(!isLogin)}>Log out</button>
</div> :
   <div className="first_page">
        <h1>Жүйеге кіру қажет</h1>
    <button onClick={()=> setLogin(!isLogin)}>login</button>
    <button onClick={()=> setRegister(!isRegister)}>register</button>
</div>
    }

</div>
    )
}
export default HomeWork