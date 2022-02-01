import { useState } from "react";

import Form from "../components/Form";
import List from "../components/Lista";
import Timer from "../components/Timer";
import { TasksTypes } from "../types/tasks";

import style from "./style.module.scss";

function App() {
  const [tasks, setTasks] = useState<Array<TasksTypes>>([]);

  return (
    <main className={style.AppStyle}>
      <Form tasks={tasks} setTasks={setTasks} />
      <List tasks={tasks} />
      <Timer />
    </main>
  );
}

export default App;
