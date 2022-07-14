import styles from './styles.module.scss';
import FlipCard from './FlipCard';
import cardContent from './cardContent.ts';
const FlipCards = () => {
  return (
    <div className={styles.cards}>
      {cardContent.map((content, index) => {
        return <FlipCard key={index} content={content} />;
      })}
    </div>
  );
};

export default FlipCards;
