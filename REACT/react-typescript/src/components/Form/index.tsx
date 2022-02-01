import { FormEvent, useState } from 'react';
import Button from '../Button';
import style from './style.module.scss';


function Form() {
  const [taskAndTime, setTaskAndTime] = useState({
    task: '',
    time: '00:00:00',
  });

  function handleSubmit(event: FormEvent){
    event.preventDefault();
    console.log(taskAndTime);
  }

  return (
    <form className={style.novaTarefa} onSubmit={handleSubmit}>
      <div className={style.inputContainer}>
        <label htmlFor='task'>Tarefa</label>
        <input
          type='text'
          id='task'
          placeholder='O que vc quer estudar'
          name='task'
          onChange={({ target: { value } }) =>
            setTaskAndTime({ ...taskAndTime, task: value })
          }
          value={taskAndTime.task}
          required
        />
      </div>

      <div className={style.inputContainer}>
        <label>Tempo</label>
        <input
          type='time'
          step='1'
          name='time'
          id='time'
          min='00:00:00'
          max='01:30:00'
          value={taskAndTime.time}
          onChange={({ target: { value } }) =>
            setTaskAndTime({ ...taskAndTime, time:value })
          }
          required
        />
      </div>

      <Button>Adicionar</Button>
    </form>
  );
}

export default Form;
