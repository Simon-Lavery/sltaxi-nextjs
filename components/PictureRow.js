import styles from "../styles/PictureRow.module.css";

const PictureRow = ({ children, reverse = false }) => {
  return (
    <div className={styles.pictureRow}>
      <div className={styles.picture}>{children[0]}</div>
      <div className={`${styles.textBlock} ${reverse ? styles.swap : ""}`}>
        {children[1]}
      </div>
    </div>
  );
};

export default PictureRow;
