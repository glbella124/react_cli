// 原本自带的
import React, { Component } from "react";

// 自己写的
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {

  // 初始化状态
  state = {todos:[
    {id:"001",name:"看书",done:true},
    {id:"002",name:"敲代码",done:true},
    {id:"003",name:"打游戏",done:false},
    {id:"004",name:"看灿烂星河",done:false},
    {id:"005",name:"逛街",done:false},
  ]}

  // 用于添加一个todo,接收的参数是todo对象
  addTodo = (todoObj)=>{
    // 获取原todos
    const {todos} = this.state
    // 追加一个todo
    const newTodos = [todoObj,...todos]
    // 更新状态
    this.setState({todos:newTodos})
  }

  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo = {this.addTodo} />
          <List todos={todos} />
          <Footer />
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
