import Form from '../components/Form';
import Lista from '../components/Lista';
import Timer from '../components/Timer';

import style from './style.module.scss';

function App() {
  return (
    <main className={style.AppStyle}>
      <Form />
      <Lista />
      <Timer />
    </main>
  );
}

export default App;
