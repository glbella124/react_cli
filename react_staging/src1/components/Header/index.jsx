import React, { Component } from 'react'
import PropTypes from "prop-types"

import {nanoid} from "nanoid"


import "./index.css"
export default class Header extends Component {

  // 对接收的props进行类型，必要性的限制
  static propTypes = {
    addTodo:PropTypes.func.isRequired
  }

  handdleKeyUp = (event) =>{
    // keyCode - 键盘编号； 不同于vue
    const {keyCode, target } = event
    if(keyCode !==13) return 
    // 添加的todo名字不能为空 - 去空格
    if(target.value.trim() === ""){
      alert("输入不能为空")
      return
    }
    console.log(target.value, keyCode);
    const todoObj = {id:nanoid(),name:target.value,done:false}
    //将todoObj传递给App 
    this.props.addTodo(todoObj)
    target.value = ""
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handdleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    )
  }
}
