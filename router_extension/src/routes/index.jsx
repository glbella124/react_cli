import { Navigate } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";

const routes = [
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  // 404 重定向
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
];

export default routes;
