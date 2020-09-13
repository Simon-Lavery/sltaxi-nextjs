import styles from "../styles/Picture.module.css";
const Picture = ({ imgURL, altText }) => {
  return (
    <picture className={styles.picture}>
      <source srcSet={`/imgs/${imgURL}.webp`} type="image/webp" />
      <source srcSet={`/imgs/${imgURL}.jpg`} type="image/jpg" />
      <img src={`/imgs/${imgURL}.jpg`} alt={altText} />
    </picture>
  );
};

export default Picture;
