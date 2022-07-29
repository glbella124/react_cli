import React, { Component } from "react";
import "./index.css";
export default class Footer extends Component {

  // 全选checkbox的回调
  handleCheckAll = (event) =>{
    this.props.checkAllTodo(event.target.checked)
  }

  // 清除所有已完成的回调
  handleClearAllDone = () =>{
    this.props.clearAllDone()
  }

  render() {
    const { todos } = this.props;
    // 已完成个数
    // .reduce - 对数组进行条件统计
    // pre - 函数上一次的返回值，第一次无返回值，以0为主
    // curr - 第二次调用就是第一次调用的返回值
    const doneTotal = todos.reduce((pre, curr) => pre + (curr.done ? 1 : 0), 0);
    const total = todos.length;

    // defaultChecked - 只在第一次起作用
    // 总数
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleCheckAll} checked={doneTotal === total && total !==0 ? true : false} />
        </label>
        <span>
          <span>已完成 {doneTotal}</span> / 全部 {total}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成的任务</button>
      </div>
    );
  }
}
