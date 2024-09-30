import React, { Component } from "react";
import "./index.css";

export default class Header extends Component {
  inputRef = React.createRef();

  add = () => {
    this.props.addToDo(this.inputRef.current.value);
  };
  handleKeyUp = (e) => {
    const { keyCode, target } = e;
    if (keyCode !== 13) return;
    this.props.addToDo(target.value);
  };
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          placeholder="请输入任务名称"
          ref={this.inputRef}
          onKeyUp={this.handleKeyUp}
        />
        &nbsp;
        <button className="btn" onClick={this.add}>
          添加
        </button>
      </div>
    );
  }
}
