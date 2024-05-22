import styles from './Button.module.scss';
export default function App({ children, variant, href }) {
  return (
    <a href={href} className={variant ? styles[variant] : styles.button}>
      {children}
    </a>
  );
}
