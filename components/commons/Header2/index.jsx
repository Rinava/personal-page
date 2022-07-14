import styles from './styles.module.scss';
const Header2 = ({ children }) => {
  return <h2 className={styles.header}>{children}</h2>;
};
export default Header2;
