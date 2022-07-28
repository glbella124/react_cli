import React, { Component } from 'react'
import "./index.css"
export default class Item extends Component {

  

  // 标识鼠标移入，移出的回调
  state = {mouse:false} 

  // 写成高阶函数
  handleMouse = (flag) =>{
    return ()=>{
      this.setState({mouse:flag})
    }
  }

  // 勾选，取消勾选某一个todo的回调
  handleCheck = (id)=>{
    return (event)=>{
      this.props.updateTodo(id,event.target.checked)
    }
  }

 

  render() {
    const {id,name,done} = this.props
    const {mouse} = this.state
    return (
      <li style={{backgroundColor:mouse?"#ddd":"#fff"}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
        <label>
          <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)}/>
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{display:mouse?"block":"none"}}>删除</button>
      </li>
    )
  }
}
