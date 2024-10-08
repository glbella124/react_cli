import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Message() {
  const [messages] = useState([
    { id: "001", title: "消息1", content: "朝辞白帝彩云间" },
    { id: "002", title: "消息2", content: "千里之外" },
    { id: "003", title: "消息3", content: "天下大同，共此欢声" },
    { id: "004", title: "消息4", content: "床头明月光" },
  ]);
  return (
    <div>
      <ul>
        {messages.map((m) => (
          <li key={m.id}>
            <Link
              to="detail"
              state={{
                id: m.id,
                title: m.title,
                content: m.content,
              }}
            >
              {m.title}
            </Link>
          </li>
        ))}
      </ul>
      {/* 指定路由组件的展示位置 */}
      <Outlet />
    </div>
  );
}
