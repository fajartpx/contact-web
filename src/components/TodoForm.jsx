import { TextField } from "@mui/material";
import React, { useState } from "react";
import '../App.css'




const TodoForm =({submitHandler, todo, changeHandler})=> {
    const [input,setInput] = useState("")

    return (
        <>   
            <div className="todo-Form_container">
                <h2>Data Kontak</h2>
                <div className="todo-Form_desain">
                    <TextField value={input} onChange={(event)=>(setInput(event.target.value))} className="todo-form" label="Nama Lengkap" variant="outlined" />
                    <p>{input}</p>
                </div>
                <button onClick={()=>(submitHandler(todo))} className="todo-Form_button">Inputkan</button>
            </div>
        </>
    )
}

export default TodoForm;