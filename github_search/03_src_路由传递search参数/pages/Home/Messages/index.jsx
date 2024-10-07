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
                <Link
                  to={`/home/messages/detail?id=${msgObj.id}&title=${msgObj.title}`}
                >
                  {msgObj.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <hr />
        {/* 声明接收params参数 */}
        {/* <Route path="/home/messages/detail/:id/:title" component={Detail} /> */}
        {/* 正常路由注册 */}
        <Route path="/home/messages/detail" component={Detail} />
      </div>
    );
  }
}
