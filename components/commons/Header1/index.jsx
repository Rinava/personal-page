import styles from './styles.module.scss';
const Header1 = ({ children }) => {
  return (
    <h1 className={styles.header}>
      <span className={styles.rainbow}>{children}</span>
    </h1>
  );
};
export default Header1;
