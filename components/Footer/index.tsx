import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.my_name}>
        <span className={styles.decoration}>
          .・。.・゜✭・.・✫・゜・。.・。.・゜✭・.・✫・゜・。.
        </span>
        <span className={styles.name}>By Lara Mateo (ฅ♥ᆺ♥ฅ)</span>
        <span className={styles.decoration}>
          .・。.・゜✭・.・✫・゜・。.・。.・゜✭・.・✫・゜・。.
        </span>
      </p>
    </footer>
  );
};
export default Footer;
