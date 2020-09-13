import styles from "../../../styles/layout/navbar/NavMenuButton.module.css";
import { IconContext } from "react-icons";
import { FaBars } from "react-icons/fa";
const NavMenuButton = ({ toggleMenu }) => {
  return (
    <div>
      <button
        onClick={() => {
          toggleMenu();
        }}
        className={styles.menuButton}
        type="button"
      >
        <IconContext.Provider value={{ className: styles.icon }}>
          <div>
            <FaBars />
          </div>
        </IconContext.Provider>
      </button>
    </div>
  );
};

export default NavMenuButton;
