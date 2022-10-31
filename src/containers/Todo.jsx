import React, { useState } from "react";
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import '../App.css'

const Todo =()=> {
    const data = ["fajar", "ika"];
    const [todo, setTodo] = useState([...data])
    const [input,setInput] = useState("")
    
    const handlerSubmit = (todox)=>{
        setTodo([...todo,todox])
        setInput("")
    }

    const handlerChange=(event)=>{
        setInput(event.target.value)
    }

   
    return(
        <>
        <h1 style={{textAlign:'center'}}>Call a Friend</h1>
        <hr/>
        <div className="todo-Container">
            <TodoForm submitHandler={()=>(handlerSubmit(input))} changeHandler={handlerChange} value={input}/>
            <TodoList list={todo}/> 
            {console.log(todo)}  
        </div>
        </> )
}

export default Todo;