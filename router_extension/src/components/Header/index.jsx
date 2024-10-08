import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };
  const forward = () => {
    navigate(1);
  };

  return (
    <div className="col-xs-offset-2 col-xs-8">
      <h3>React Router Demo</h3>
      <button onClick={back}>←后退</button>
      <button onClick={forward}>→前进</button>
    </div>
  );
}
