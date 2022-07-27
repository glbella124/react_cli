import React, { Component } from 'react'
import "./index.css"
export default class Footer extends Component {
  render() {
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox"/>
        </label>
        <span>
          <span>已完成0</span> / 全部4
        </span>
        <button className="btn btn-danger">清除已完成的任务</button>
      </div>
    )
  }
}
