import Button from '../Button';
import style from './style.module.scss';

function Form() {
  return (
    <form className={style.novaTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor='task'>Tarefa</label>
        <input
          type='text'
          id='task'
          placeholder='O que vc quer estudar'
          name='task'
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
          required
        />
      </div>

      <Button>Adicionar</Button>
    </form>
  );
}

export default Form;
