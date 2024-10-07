import "./App.css";
import { NavLink, Route, Routes, Navigate } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  const computedClassName = ({ isActive }) => {
    return isActive ? "list-group-item atguigu" : "list-group-item";
  };
  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <h3>React Router Demo</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 路由链接 */}
            <NavLink to="/home" className={computedClassName}>
              Home
            </NavLink>
            <NavLink to="/about" className={computedClassName}>
              About
            </NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Navigate to="about" />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
