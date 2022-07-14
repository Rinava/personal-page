import styles from './styles.module.scss';
const FlipCard = ({ content }) => {
  const { front, back } = content;
  const { info, emoji, image } = back;
  return (
    <div className={styles.flip_card}>
      <div className={styles.card_inner}>
        <div className={styles.front}>
          <h2>{front}</h2>
        </div>
        <div className={styles.back}>
          <div className={styles.partial_border}>
            <h3>
              {info}
              <span className={styles.emoji}>{emoji}</span>
            </h3>
            <img src={image} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FlipCard;
