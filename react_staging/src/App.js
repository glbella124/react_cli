import React, { Component } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

class App extends Component {
  // 状态在哪里，操作状态的方法就在哪里
  // 初始化状态
  state = {
    todos: [
      { id: "001", name: "看书", done: true },
      { id: "002", name: "敲代码", done: true },
      { id: "003", name: "打游戏", done: false },
      { id: "004", name: "看灿烂星河", done: false },
      { id: "005", name: "逛街", done: false },
    ],
  };

  addToDo = (data) => {
    const { todos } = this.state;
    const obj = {
      id: nanoid(),
      name: data,
      done: false,
    };

    const newTodos = [obj, ...todos];
    this.setState({ todos: newTodos });
  };

  deleteToDo = (data) => {
    const { todos } = this.state;
    const arr = todos.filter((item) => item.id !== data);
    this.setState({ todos: arr });
  };

  updateToDo = (id, checked) => {
    const { todos } = this.state;
    const newTodos = todos.map((item) => {
      if (item.id === id) return { ...item, done: checked };
      else return item;
    });
    this.setState({ todos: newTodos });
  };

  checkAllDo = (checked) => {
    const { todos } = this.state;
    const newTodos = todos.map((item) => {
      return { ...item, done: checked };
    });
    this.setState({ todos: newTodos });
  };

  clearAllDo = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((item) => !item.done);
    this.setState({ todos: newTodos });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addToDo={this.addToDo} />
          <List
            todos={todos}
            updateToDo={this.updateToDo}
            deleteToDo={this.deleteToDo}
          />
          <Footer checkAllDo={this.checkAllDo} clearAllDo={this.clearAllDo} />
        </div>
      </div>
    );
  }
}

export default App;
