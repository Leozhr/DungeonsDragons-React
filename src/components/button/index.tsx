import styles from './styles.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button {...props} className={styles.button}>{children}</button>
  )
}