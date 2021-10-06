import React from "react";

import { Card } from "../card/Card";

import "./taskList.css";

export class TaskList extends React.Component {
  render() {
    const titleTask = ["Trabalho", "Estudo", "Lazer", "teste"];

    return (
      <ul>
        {titleTask.map((title, index) => {
          return (
            <li key={index}>
              
              <p>{title}</p>
              <Card />
            </li>
          );
        })}
      </ul>
    );
  }
}
