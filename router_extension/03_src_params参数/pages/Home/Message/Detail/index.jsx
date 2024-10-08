import React from "react";
import { useMatch, useParams } from "react-router-dom";

export default function Detail() {
  const { id, title, content } = useParams();
  //   const x = useMatch("/home/message/detail/:id/:title/:content");

  // params:
  // content: "天下大同，共此欢声"
  // id: "003"
  // title: "消息3"
  // pathname: "/home/message/detail/003/消息3/天下大同，共此欢声"
  // pathnameBase: "/home/message/detail/003/消息3/天下大同，共此欢声"
  // pattern:
  // caseSensitive: false
  // end: true
  // path: "/home/message/detail/:id/:title/:content"
  //   console.log(x);
  return (
    <ul>
      <li>编号：{id}</li>
      <li>标题：{title}</li>
      <li>消息内容：{content}</li>
    </ul>
  );
}
