import React, { Component } from "react";

const DetailData = [
  { id: "01", content: "This is my book" },
  { id: "02", content: "This is my pen" },
  { id: "03", content: "This is my camera" },
];

export default class Detail extends Component {
  render() {
    // 接收params参数
    // const { id, title } = this.props.match.params;
    // 接收search参数
    // const { search } = this.props.location;
    // const { id, title } = qs.parse(search.slice(1));

    // 接收state参数
    const { id, title } = this.props.location.state || {};

    // 匹配数据
    const result = DetailData.find((item) => {
      return item.id === id;
    });

    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{result.content}</li>
      </ul>
    );
  }
}
