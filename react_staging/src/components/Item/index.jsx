import React, { Component } from "react";
import "./index.css";
export default class Item extends Component {
  handleDelete = (id) => {
    this.props.deleteToDo(id);
  };
  handleCheck = (id) => {
    return (e) => {
      this.props.updateToDo(id, e.target.checked);
    };
  };
  render() {
    const { id, name, done } = this.props;
    return (
      <li>
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          onClick={() => {
            this.handleDelete(id);
          }}
        >
          删除
        </button>
      </li>
    );
  }
}
