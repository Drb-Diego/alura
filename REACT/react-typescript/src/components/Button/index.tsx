import style from './styles.module.scss';

interface ButtonProps {
  children: string;
}

function Button({ children }: ButtonProps) {
  return (
    <button type='submit' className={style.botao}>
      {children}
    </button>
  );
}

export default Button;
