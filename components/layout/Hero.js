import styles from "../../styles/Hero.module.css";
import Picture from "../Picture";
const Hero = (props) => {
  return (
    <div className={styles.hero}>
      <Picture {...props} />
    </div>
  );
};

export default Hero;
