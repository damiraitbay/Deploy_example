import { useState } from "react"

function Unique_keys(){
    const[tasks, setTasks] = useState([{task: 'Do homeworks', completed: false}])
    const[value, setValue] = useState('')
    const[text, setText] =  useState('')
        return(
   <div>

    <input type="text" onChange={(e)=>setValue(e.target.value) }/> <button onClick={()=> {
        setText(value)
        setTasks([...tasks, {task: text, completed: false}])
    }}>add</button>
    <ul>
    {tasks.map((n, index)=> {
        return( 
        <div>
            <li key={index}>{n.task}</li>
            <button onClick={()=>
                {
                console.log(tasks)
                setTasks(tasks.map((task, i)=> (i===index ? {...task, completed: !task.completed} : task)))
            }}>{n.completed ? 'Қайта бастау' : 'Аяқталды'}</button>
        </div>
         )
    })} 
    </ul>
 
   </div>
    )
}

export default Unique_keys