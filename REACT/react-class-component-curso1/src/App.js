import React from "react";
import { Form } from "./components/form/Form";
import { TaskList } from "./components/taskList/TaskList";

import "./app.css"
export class App extends React.Component {
  render() {

    return (
      <section>
        <Form />

        <TaskList />
      </section>
    );
  }
}
