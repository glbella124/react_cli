import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Home() {
  // const [sum, setSum] = useState(2);
  return (
    <div>
      <h2>Home</h2>
      <div>
        <ul className="nav nav-tabs">
          <li>
            <NavLink className="list-group-item" to="news">
              News
            </NavLink>
          </li>
          <li>
            <NavLink className="list-group-item" to="message">
              Message
            </NavLink>
          </li>
        </ul>
        {/* 指定路由组件呈现的位置 */}
        <Outlet />
      </div>
    </div>
  );
  // return (
  //   <div>
  //     <h3>Home</h3>
  //     {sum === 5 ? <Navigate to="/about" /> : <h4>当前sum值是：{sum}</h4>}
  //     <button onClick={() => setSum(5)}>点击后变成5</button>
  //   </div>
  // );
}
