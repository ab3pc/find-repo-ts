import styles from './button.module.scss';

interface ButtonProps {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, onClick }: ButtonProps) => (
  <button className={styles.button} onClick = {onClick}>
    {children}
  </button>
);
