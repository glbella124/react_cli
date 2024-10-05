import React, { Component } from "react";
import axios from "axios";

export default class Search extends Component {
  search = () => {
    const {
      keywordElement: { value: keyword },
    } = this;
    console.log(keyword);
    this.props.updateAppState({ isFirst: false, isLoading: true });
    axios.get(`/api1/search/users?q=${keyword}`).then(
      (response) => {
        this.props.updateAppState({
          isLoading: false,
          users: response.data.items,
        });
      },
      (err) => {
        this.props.updateAppState({ isLoading: false, err: err.message });
      }
    );
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索github用户</h3>
        <div>
          <input
            ref={(c) => (this.keywordElement = c)}
            type="text"
            placeholder="输入关键字搜索"
          />
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}
