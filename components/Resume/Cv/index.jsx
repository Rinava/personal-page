import styles from './styles.module.scss';
import CvHeader from './../CvHeader';
import PersonalInfo from './../PersonalInfo';
import ProfessionalInfo from './../ProfessionalInfo';
const Cv = () => {
  return (
    <div className={styles.cv__container}>
      <CvHeader />
      <div className={styles.cv__body}>
        <PersonalInfo />
        <ProfessionalInfo />
      </div>
      <div className={styles.cv__footer}></div>
    </div>
  );
};
export default Cv;
