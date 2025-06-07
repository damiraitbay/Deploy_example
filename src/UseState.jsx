import { useState } from "react";

function UseState(){
    const[value, setVlaue] =  useState('')
    const[text, setText] =  useState('')
    const[tasks, setTasks] = useState ([]) 
    const toggleComplete =  (index)=>{
        setTasks(
            tasks.map((task, i) => (i===index ? {...task, completed: !task.completed} : task))
        )
    }
    return(
        <div style={{width:'400px', height: '500px', border: '5px solid black' ,}}>
            <p>UseState</p>
            <input type="name" onChange={(e)=> setVlaue(e.target.value)}/> <button type="text"onClick={()=> {
                setText(value)
                setTasks([...tasks, {text: text, completed: false}])
            }        
                }>submit </button>
            
          {
            tasks.map((task, index)=>{
                return(
                    <div key={index}>
                        <p style={{
                            textDecoration: task.completed ? 'line-through' : 'none'
                        }}>{task.text}</p> <button onClick={()=> toggleComplete(index)}>{task.completed ? '✅' : '❌'}</button>
                    </div>
                )
            })
          }
        </div>
    )   
}
export default UseState;

