import React from "react";
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import '../App.css'

const Todo =()=> {


    return(
        <>
        <h1 style={{textAlign:'center'}}>Call a Friend</h1>
        <hr/>
        <div className="todo-Container">
            <TodoForm/>
            <TodoList/>   
        </div>
        </> )
}

export default Todo;