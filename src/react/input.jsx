import React, { Component } from "react";
import {connect} from 'react-redux'


class Input extends Component {

  render() {
  return(
      <div>
          <input  value={this.props.input} onChange={(e)=>this.props.hundleChange(e.target)} type="text" id='input' />
    <button  onClick={()=>this.props.add(this.props.input)} >add</button>
      </div>
  )
  }
}

const mapStateToProps = state =>{
  return{
      input:state.input
  }
} 

const mapDispatchToProps = dispatch =>{
  return{
    hundleChange:target=>{
      dispatch({type:'SET_INPUT',input:target.value})
    },

    add:input=>{
      let obj = {}
      obj.txt =input
      obj.id = Math.floor(Math.random()*1000 )

      dispatch({type:'ADD_TODO',todo:obj})
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Input)