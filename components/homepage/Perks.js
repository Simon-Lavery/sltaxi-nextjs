import Perk from "./Perk";
import styles from "../../styles/homepage/Perks.module.css";
import { FaWifi, FaMobileAlt, FaCreditCard } from "react-icons/fa";
const Perks = () => {
  return (
    <div className={styles.perks}>
      <Perk info="Superfast 4G customer wifi available">
        <FaWifi />
      </Perk>
      <Perk info="Mobile charging facilities">
        <FaMobileAlt />
      </Perk>
      <Perk info="Card and Contactless Payments accepted in every taxi">
        <FaCreditCard />
      </Perk>
    </div>
  );
};

export default Perks;
