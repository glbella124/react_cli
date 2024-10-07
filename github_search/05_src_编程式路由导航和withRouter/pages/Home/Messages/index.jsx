import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Detail from "./Detail";

export default class Message extends Component {
  state = {
    messageArr: [
      { id: "01", title: "message1" },
      { id: "02", title: "message2" },
      { id: "03", title: "message3" },
    ],
  };
  pushShow = (id, title) => {
    // push跳转携带params参数
    // this.props.history.push(`/home/messages/detail/${id}/${title}`);
    // push跳转携带search参数
    // this.props.history.push(`/home/messages/detail?id=${id}&title=${title}`);
    // push跳转携带state
    this.props.history.push(`/home/messages/detail`, { id, title });
  };
  replaceShow = (id, title) => {
    // replace跳转携带params参数
    // this.props.history.replace(`/home/messages/detail/${id}/${title}`);
    // replace跳转携带search参数
    // this.props.history.replace(`/home/messages/detail?id=${id}&title=${title}`);
    // replace跳转携带state
    this.props.history.replace(`/home/messages/detail`, { id, title });
  };

  back = () => {
    this.props.history.goBack(); // 回退到上一页
  };
  forward = () => {
    this.props.history.goForward(); // 前进到下一页
  };
  go = () => {
    this.props.history.go(2);
  };
  render() {
    const { messageArr } = this.state;
    return (
      <div>
        <ul>
          {messageArr.map((msgObj) => {
            return (
              <li key={msgObj.id}>
                {/* 向路由传递params参数 */}
                {/* <Link to={`/home/messages/detail/${msgObj.id}/${msgObj.title}`}>
                  {msgObj.title}
                </Link> */}
                {/* 向路由传递search参数 */}
                {/* <Link
                  to={`/home/messages/detail?id=${msgObj.id}&title=${msgObj.title}`}
                >
                  {msgObj.title}
                </Link> */}
                {/* 向路由传递state参数 */}
                <Link
                  to={{
                    pathname: "/home/messages/detail",
                    state: { id: msgObj.id, title: msgObj.title },
                  }}
                >
                  {msgObj.title}
                </Link>
                &nbsp;
                <button onClick={() => this.pushShow(msgObj.id, msgObj.title)}>
                  view push
                </button>
                &nbsp;
                <button
                  onClick={() => this.replaceShow(msgObj.id, msgObj.title)}
                >
                  view replace
                </button>
              </li>
            );
          })}
        </ul>
        <hr />
        {/* 声明接收params参数 */}
        {/* <Route path="/home/messages/detail/:id/:title" component={Detail} /> */}
        {/* 正常路由注册 */}
        <Route path="/home/messages/detail" component={Detail} />
        <button onClick={this.back}>back</button>
        <button onClick={this.forward}>forward</button>
        <button onClick={this.go}>go</button>
      </div>
    );
  }
}
