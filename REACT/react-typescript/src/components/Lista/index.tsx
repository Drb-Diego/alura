import React from 'react';
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
          <li key={task.title} className={style.item}>
            <h3>{task.title}</h3>
            <span>{task.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
