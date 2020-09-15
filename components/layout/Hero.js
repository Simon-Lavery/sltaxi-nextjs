import styles from "../../styles/Hero.module.css";
const Hero = ({ imgURL, altText, ext }) => {
  return (
    <div className={styles.hero}>
      <picture>
        <source media="(max-width: 768px" srcSet={`/imgs/${imgURL}${ext}`} />
        <source
          media="(min-width: 769px"
          srcSet={`/imgs/${imgURL}desktop${ext}`}
        />
        <img src={`/imgs${imgURL}${ext}`} alt={altText} />
      </picture>
    </div>
  );
};

export default Hero;
