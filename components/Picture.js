import styles from "../styles/Picture.module.css";
const Picture = ({ imgURL, altText }) => {
  return (
    <picture className={styles.picture}>
      <source
        srcSet={`/imgs/${imgURL}mobile.jpg`}
        type="image/jpg"
        media="(min-width: 768px)"
        alt={altText}
      />
      <img src={`/imgs/${imgURL}.jpg`} alt={altText} />
    </picture>
  );
};

export default Picture;
