import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export default function Home() {
  const [sum, setSum] = useState(2);
  return (
    <div>
      <h3>Home</h3>
      {sum === 5 ? <Navigate to="/about" /> : <h4>当前sum值是：{sum}</h4>}
      <button onClick={() => setSum(5)}>点击后变成5</button>
    </div>
  );
}
