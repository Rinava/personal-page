import styles from './styles.module.scss';
const PersonalInfo = () => {
  return (
    <div className={styles.personal}>
      <div className={styles.about_me}>
        <h3 className={styles.about_me_title}>About Me</h3>
        <p className={styles.about_me_text}>
          I consider myself to be a very capable person in everything I set my
          mind to, I like challenges and the lessons they leave us with. I love
          to train constantly and learn new things, either on my own or through
          conversations with other people.
        </p>
      </div>
      <div className={styles.soft_skills}>
        <h3 className={styles.soft_skills_title}>Soft Skills</h3>
        <ul className={styles.soft_skills_list}>
          <li className={styles.soft_skills_list_item}>
            Autodidact - I love to learn new things and I am always looking for
            new ways to improve my skills.
          </li>
          <li className={styles.soft_skills_list_item}>
            Assertive - I am always ready to take on new challenges
          </li>
          <li className={styles.soft_skills_list_item}>
            Creative - I love to create and to express my ideas.
          </li>
          <li className={styles.soft_skills_list_item}>
            Responsible - I do everything in my power to make sure that I am
            doing my best work and to submit it before the deadline.
          </li>
          <li className={styles.soft_skills_list_item}>
            Team Player - I am always ready to help
          </li>
          <li className={styles.soft_skills_list_item}>
            Open Mind - I am always open to new ideas
          </li>
        </ul>
      </div>
      {/* <div className={styles.contact}>
        <h3 className={styles.contact_title}>Contact Me</h3>
        <ul className={styles.contact_list}>
          <li className={styles.contact_list_item}>
            <a href='mailto:laramateoco@gmail.com'>
              laramateoco@gmail.com
            </a>
          </li> */}
    </div>
  );
};
export default PersonalInfo;
