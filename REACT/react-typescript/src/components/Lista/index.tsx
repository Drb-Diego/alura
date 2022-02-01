import Item from '../Item';
import style from './style.module.scss';

function Lista() {
  const tasks = [
    { title: 'react', time: '02:00:00' },
    { title: 'javascript', time: '01:00:00' },
    { title: 'typescript', time: '03:00:00' },
  ];

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((task) => (
          <Item {...task} key={task.title} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
