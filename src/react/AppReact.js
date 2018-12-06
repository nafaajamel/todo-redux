import React, { Component } from "react";
import Input from "../redux/input";
import Menu from "./menu";
import "../App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      input: ""
    };
  }

  hundleChange = target => {
    this.setState({
      input: target.value
    });
  };
  add = () => {
    let obj = {};
    obj.txt = this.state.input;
    obj.id = Math.floor(Math.random() * 1000);
    this.setState({
      todo: [...this.state.todo, obj]
    });
  };

  remove = id => {
    this.setState({
      todo: this.state.todo.filter(x => x.id !== id)
    });
  };

  render() {
    return (
      <div className="App">
        <Input hundleChange={this.hundleChange} add={this.add} />
        <Menu remove={this.remove} todo={this.state.todo} />
      </div>
    );
  }
}

export default App;
