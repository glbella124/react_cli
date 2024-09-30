import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  handleCheckAll = (e) => {
    this.props.checkAllDo(e.target.checked);
  };
  handleClearAllDone = () => {
    this.props.clearAllDo();
  };
  render() {
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleCheckAll} />
          <span>已完成/全部</span>
        </label>
        <button className="btn" onClick={this.handleClearAllDone}>
          清除已完成的任务
        </button>
      </div>
    );
  }
}
