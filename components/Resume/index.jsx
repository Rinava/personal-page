import styles from './styles.module.scss';

const Resume = () => {
  return (
    <object data='abc.pdf' type='application/pdf' className={styles.resume}>
      <embed
        src='/assets/Lara-Mateo-Resume.pdf#view=fitH'
        title='Lara Mateo Resume'
        frameBorder='0'
        allowFullScreen
      />
    </object>
  );
};

export default Resume;
