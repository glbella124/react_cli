import React from "react";
import { useLocation } from "react-router-dom";

export default function Detail() {
  // hash: ""
  // key: "a4yubswd"
  // pathname: "/home/message/detail"
  // search: ""
  // state: {id: '002', title: '消息2', content: '千里之外'}
  const location = useLocation();
  const {
    state: { id, title, content },
  } = location;
  console.log(location);
  return (
    <ul>
      <li>编号：{id}</li>
      <li>标题：{title}</li>
      <li>消息内容：{content}</li>
    </ul>
  );
}
