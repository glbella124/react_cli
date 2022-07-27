// 引入React核心库
import React from "react";
// 引入ReactDOM
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";


// ReactDOM.render 在 React18里不再支持了
// ReactDOM.render(<App />, document.getElementById("root"));
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// React.StrictMode - 检查代码里不太合理的地方
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
