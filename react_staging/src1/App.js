// 原本自带的
import React, { Component } from "react";

// 自己写的
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";

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

  // 用于添加一个todo,接收的参数是todo对象
  addTodo = (todoObj) => {
    // 获取原todos
    const { todos } = this.state;
    // 追加一个todo
    const newTodos = [todoObj, ...todos];
    // 更新状态
    this.setState({ todos: newTodos });
  };

  // 更新勾选状态
  updateTodo = (id, done) => {
    // 获取状态中的todos
    const { todos } = this.state;
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done: done };
      else return todoObj;
    });

    this.setState({ todos: newTodos });
  };

  deleteTodo = (id) => {
    console.log(id, "App");
    const { todos } = this.state;
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id;
    });
    this.setState({ todos: newTodos });
  };

  // 全选
  checkAllTodo = (done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todoObj) => {
      return { ...todoObj, done };
    });
    this.setState({ todos: newTodos });
  };

  // 清除所有已完成的
  clearAllDone = () => {
    const { todos } = this.state;
    // 过滤数据
    const undoneTodos = todos.filter((todoObj)=>{
      return !todoObj.done 
    })
    this.setState({todos:undoneTodos})
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List
            updateTodo={this.updateTodo}
            todos={todos}
            deleteTodo={this.deleteTodo}
          />
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
        </div>
      </div>
    );
  }
}

export default App;

// 写法1: 创建外壳组件
// import React from "react"

// class App extends React.Component{
//   render(){
//     return(
//       <div>Hello, This is my website</div>
//     )
//   }
// }

// export default App

// 原本的
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
