import { IconContext } from "react-icons";
import styles from "../../styles/homepage/Perk.module.css";
const Perk = ({ children, info }) => {
  return (
    <IconContext.Provider value={{ className: styles.icon }}>
      <div className={styles.perk}>
        {children}
        <p className={styles.info}>{info}</p>
      </div>
    </IconContext.Provider>
  );
};

export default Perk;
