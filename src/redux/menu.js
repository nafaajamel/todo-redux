import React from 'react';
import {connect} from 'react-redux'

const Menu = ({todo,remove})=>{
    return(
        <ul>
          {todo.map(x=><li onClick={()=>remove(x.id)} key={x.id}>{x.txt}</li>)}
        </ul>
    )
}


const mapStateToProps = ({todo}) =>{
    return{
    todo,
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        remove: (id) =>{
            dispatch({type:'REMOVE_TODO',id:id})
        }
    }
}


export default   connect(mapStateToProps,mapDispatchToProps)(Menu)