import React, { Component } from "react";
import Input from "../react/input";
import Menu from "./menu";
import "../App.css";




class App extends Component {

  render() {
    return (
      <div className="App">
        <Input  />
        <Menu />
      </div>
    );
  }
}

export default App;
