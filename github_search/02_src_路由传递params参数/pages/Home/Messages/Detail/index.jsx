import React, { Component } from "react";

const DetailData = [
  { id: "01", content: "This is my book" },
  { id: "02", content: "This is my pen" },
  { id: "03", content: "This is my camera" },
];

export default class Detail extends Component {
  render() {
    const { id, title } = this.props.match.params;
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
