import styles from './styles.module.scss';

const Resume = () => {
  return (
    <div className={styles.resume}>
      <iframe
        src='https://drive.google.com/file/d/1a3UdKnpOoD7jo2O8mlnDekLThygyUeVN/preview?usp=sharing#view=fitH'
        title='Lara Mateo Resume'
        type='application/pdf'
        // frameBorder='0'
        // allowFullScreen
      />
    </div>
  );
};

export default Resume;
