import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { TasksTypes } from "../../types/tasks";
import Button from "../Button";
import style from "./style.module.scss";

interface FormProps {
  tasks: Array<TasksTypes>;
  setTasks: Dispatch<SetStateAction<Array<TasksTypes>>>
}

function Form({ tasks, setTasks }: FormProps) {
  const [taskAndTime, setTaskAndTime] = useState({
    title: "",
    time: "00:00:00",
  });

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, {...taskAndTime}])
  }

  return (
    <form className={style.novaTarefa} onSubmit={handleSubmit}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Tarefa</label>
        <input
          type="text"
          id="task"
          placeholder="O que vc quer estudar"
          name="task"
          onChange={({ target: { value } }) =>
            setTaskAndTime({ ...taskAndTime, title: value })
          }
          value={taskAndTime.title}
          required
        />
      </div>

      <div className={style.inputContainer}>
        <label>Tempo</label>
        <input
          type="time"
          step="1"
          name="time"
          id="time"
          min="00:00:00"
          max="01:30:00"
          value={taskAndTime.time}
          onChange={({ target: { value } }) =>
            setTaskAndTime({ ...taskAndTime, time: value })
          }
          required
        />
      </div>

      <Button type="submit">Adicionar</Button>
    </form>
  );
}

export default Form;
