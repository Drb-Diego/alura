import style from "./styles.module.scss";

interface ButtonProps {
  children: string;
  type?: "button" | "submit" | "reset" | undefined;
}

function Button({ children, type = "button" }: ButtonProps) {
  return (
    <button type={type} className={style.botao}>
      {children}
    </button>
  );
}

export default Button;
