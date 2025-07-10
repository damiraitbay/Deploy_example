import { useEffect, useState } from "react"
function UseEffect(){
    const[num, setNum] =  useState(7)
    const[effect, setEffect] = useState('')
    useEffect(()=>{
       if(effect=='plus'){
        setTimeout(()=>{
        
        alert('Мән жоғарылады')
        }, 5000)
       }else if(effect=='minus'){
        confirm('Мән төмендеді')
       }
       
    }, [num])
    function plus(){
      setEffect('plus')
            setNum(num+1)
    }
    function minus(){
  setEffect('minus')
            setNum(num-1)
    }


    localStorage.setItem('num', num)
   return(
    <div>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <p>{num}</p>
    </div>
   )
}
export default UseEffect