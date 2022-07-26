import styles from './styles.module.scss';
import Cv from './Cv';
const Resume = () => {
  return (
    <div className={styles.resume}>
      <a
        href='/assets/Lara-Mateo-Resume.pdf'
        download='Lara Mateo Resume'
        className={styles.download}>
        Download Resume
      </a>
      <Cv />
    </div>
  );
};

export default Resume;
