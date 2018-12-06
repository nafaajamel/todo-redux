import React, { Component } from "react";
import { connect } from "react-redux";
class Input extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  sendToRedux = () => {
    let obj = {};

    obj.txt = this.state.input;
    obj.id = Math.floor(Math.random() * 1000);
    this.props.add(obj);
  };
  hundleChange = target => {
    this.setState({
      input: target.value
    });
  };

  render() {
    return (
      <div>
        <input
          onChange={e => this.hundleChange(e.target)}
          type="text"
          id="input"
        />
        <button onClick={this.sendToRedux}>add</button>
      </div>
    );
  }
}

const mapStateToProps = ({ input }) => {
  return {
    input
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: obj => {
      dispatch({ type: "ADD_TODO", todo: obj });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
