import Form from '../components/Form';
import Lista from '../components/Lista';

import style from './style.module.scss';

function App() {
  return (
    <main className={style.AppStyle}>
      <Form />
      <Lista />
    </main>
  );
}

export default App;
