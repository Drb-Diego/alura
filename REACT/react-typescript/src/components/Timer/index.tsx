import Button from "../Button";
import Watch from "../Watch";

import style from "./style.module.scss";

function Timer() {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronometro</p>

      <div className={style.relogioWrapper}>
        <Watch />
      </div>

      <Button type="button">Começar !</Button>
    </div>
  );
}

export default Timer;
