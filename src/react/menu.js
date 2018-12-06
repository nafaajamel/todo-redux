import React from 'react';

const Menu = ({todo,remove})=>{
    return(
        <ul>
          {todo.map(x=><li onClick={()=>remove(x.id)} key={x.id}>{x.txt}</li>)}
        </ul>
    )
}

export default Menu