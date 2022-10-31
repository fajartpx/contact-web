import React from "react";


const TodoBody = ({nama})=>{

    return (
        <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center', flexDirection:'row',width:'80%',heigh:'auto',padding:'10px', backgroundColor:'blanchedalmond',  border:'2px solid grey', borderRadius:'10px', marginLeft:'30px'}}>
            <div style={{display:'flex', flexDirection:'column', width:'40%', marginLeft:'20px'}}>   
                <p style={{margin:'6px 0px'}}><strong>Nama : </strong> {nama}</p>

            </div>
        </div> 
    )
};

const TodoList = ({list})=> {
//     const todo = [
//     {
//         image:'https://placekitten.com/g/200/300',
//         nama:'fajar',
//         umur:27
        
//     },
//        {
//         image:'https://placekitten.com/g/100/300',
//         nama:'friska',
//         umur:27
        
//     },
//        {
//         image:'https://placekitten.com/g/100/300',
//         nama:'putra',
//         umur:27
        
//     }
// ];

    return (
        <div style={{display:'flex', flexDirection:'column',flexBasis:'60%'}}>
            {list.map((item)=>{
                return (
                    <TodoBody nama={item}/> 
                )
            })}
        </div>
         
    )
   
}

export default TodoList