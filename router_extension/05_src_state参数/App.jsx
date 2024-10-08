import "./App.css";
import { NavLink, useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  const computedClassName = ({ isActive }) => {
    return isActive ? "list-group-item atguigu" : "list-group-item";
  };

  // 路由表
  const element = useRoutes(routes);
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
              {element}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
