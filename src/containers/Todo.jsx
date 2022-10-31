import React, { useState } from "react";
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import '../App.css'

const Todo =()=> {
    const data = ["fajar", "ika"];

    const [todo, setTodo] = useState([...data])
    
    const handlerSubmit = (dataBaru)=>{
        const x= todo.push(dataBaru);
        setTodo(x)
    }

   
    return(
        <>
        <h1 style={{textAlign:'center'}}>Call a Friend</h1>
        <hr/>
        <div className="todo-Container">
            <TodoForm submitHandler={handlerSubmit}/>
            <TodoList/>   
        </div>
        </> )
}

export default Todo;