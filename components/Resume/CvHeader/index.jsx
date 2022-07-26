import styles from './styles.module.scss';
const CvHeader = () => {
  return (
    <div className={styles.cv__header}>
      <h1 className={styles.cv__title}>Lara Mateo</h1>
      <h2 className={styles.cv__subtitle}>Software Engineer</h2>
      <a href='https://www.laramateo.com/'>www.laramateo.com</a>
    </div>
  );
};
export default CvHeader;
