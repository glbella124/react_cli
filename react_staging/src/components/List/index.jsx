import React, { Component } from "react";
import Item from "../Item";
import "./index.css";

export default class List extends Component {
  render() {
    const { todos, updateToDo, deleteToDo } = this.props;

    return (
      <ul className="todo-list">
        {todos?.length
          ? todos.map((item) => {
              return (
                <Item
                  key={item.id}
                  {...item}
                  updateToDo={updateToDo}
                  deleteToDo={deleteToDo}
                />
              );
            })
          : null}
      </ul>
    );
  }
}
