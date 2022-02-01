import { TasksTypes } from "../../types/tasks";
import Item from "../ItemList";
import style from "./style.module.scss";


function List({ tasks }:{ tasks :Array<TasksTypes>}) {
  return (
    <aside className={style.listaTarefas}>
      <h2>
        Estudos do dia
      </h2>
      <ul>
        {tasks.map((task) => (
          <Item {...task} key={task.title} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
