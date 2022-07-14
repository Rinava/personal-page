import FlipCard from './FlipCard';
import cardContent from './cardContent.ts';
const FlipCards = () => {
  return (
    <>
      {cardContent.map((content, index) => {
        return <FlipCard key={index} content={content} />;
      })}
    </>
  );
};

export default FlipCards;
