import styles from "../../styles/homepage/Banner.module.css";
import { IconContext } from "react-icons";
import { FaInfoCircle } from "react-icons/fa";
import Link from "next/link";
const Banner = ({ children, info }) => {
  return (
    <div className={styles.banner}>
      <div className="content">
        <div className={styles.flexRow}>
          <div className={styles.iconContainer}>
            <IconContext.Provider value={{ className: styles.icon }}>
              <FaInfoCircle />
            </IconContext.Provider>
          </div>
          <p className={styles.info}>
            {info} {children}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
