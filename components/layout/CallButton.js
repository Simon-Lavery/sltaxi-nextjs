import styles from "../../styles/layout/CallButton.module.css";
import { FaPhone } from "react-icons/fa";
import { IconContext } from "react-icons";
const CallButton = () => {
  return (
    <div className={styles.callbutton}>
      <button className={styles.button}>
        <IconContext.Provider value={{ className: styles.icon }}>
          <a href="tel:01748883370">
            <FaPhone />
          </a>
        </IconContext.Provider>
      </button>
    </div>
  );
};

export default CallButton;
