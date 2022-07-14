import Image from 'next/image';
import styles from './styles.module.scss';
const FlipCard = ({ content }) => {
  const { front, back } = content;
  const { info, emoji, image } = back;
  return (
    <div className={styles.flip_card}>
      <div className={styles.card_inner}>
        <div className={styles.front}>
          <h3 className={styles.title}>{front}</h3>
        </div>
        <div className={styles.back}>
          <div className={styles.partial_border}>
            <p className={styles.info}>
              {info}
              <span aria-hidden='true' className={styles.emoji}>
                {emoji}
              </span>
            </p>
            {image && (
              <Image
                className={styles.image}
                src={image}
                alt=''
                width={250}
                height={150}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default FlipCard;
