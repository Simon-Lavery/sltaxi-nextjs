import styles from "../../../styles/header/navbar/NavMenuButton.module.css";
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
        aria-haspopup="true">
        <IconContext.Provider value={{ className: styles.icon }}>
          <div>
            <span className="sr-only">Open menu button</span>
            <FaBars />
          </div>
        </IconContext.Provider>
      </button>
    </div>
  );
};

export default NavMenuButton;
