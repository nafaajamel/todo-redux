import React, { Component } from "react";

class Input extends Component {

  render() {
  return(
      <div>
          <input onChange={(e)=>this.props.hundleChange(e.target)} type="text" id='input' />
    <button  onClick={this.props.add} >add</button>
      </div>
  )
  }
}

export default Input