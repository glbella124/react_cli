import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import News from "./News";
import Messages from "./Messages";
import NavComp from "../../components/NavComp";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>Home</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <NavComp to="/home/news">News</NavComp>
            </li>
            <li>
              <NavComp to="/home/messages">Messages</NavComp>
            </li>
          </ul>
          {/* 注册路由 */}
          <Switch>
            <Route path="/home/news" component={News} />
            <Route path="/home/messages" component={Messages} />
            <Redirect to="/home/news" />
          </Switch>
        </div>
      </div>
    );
  }
}
