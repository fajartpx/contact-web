import { TextField } from "@mui/material";
import React from "react";
import '../App.css'




const TodoForm =({submitHandler, value, changeHandler})=> {
   

    return (
        <>   
            <div className="todo-Form_container">
                <h2>Data Kontak</h2>
                <div className="todo-Form_desain">
                    <TextField value={value} onChange={changeHandler} className="todo-form" label="Nama Lengkap" variant="outlined" />
                </div>
                <button onClick={submitHandler} className="todo-Form_button">Inputkan</button>
            </div>
        </>
    )
}

export default TodoForm;