import Button from '../Button';

function Form() {
  return (
    <form>
      <div>
        <label htmlFor='task'>Tarefa</label>
        <input
          type='text'
          id='task'
          placeholder='O que vc quer estudar'
          name='task'
          required
        />
      </div>

      <div>
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

      <Button />
    </form>
  );
}

export default Form;
