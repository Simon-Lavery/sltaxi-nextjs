import { useState } from "react";
import styles from "../../../styles/layout/navbar/Navbar.module.css";

import Nav from "./Nav";
import NavMenuButton from "./NavMenuButton";
import Logo from "./Logo";
const Navbar = () => {
  // keep track of mobile menu open/clos
  const [menuToggleStatus, setMenuToggleStatus] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const toggleMenu = () => {
    setMenuToggleStatus(!menuToggleStatus);
    setButtonClicked(!buttonClicked);
  };

  return (
    <div className={styles.navbar}>
      <div className="content">
        <div className={styles.flexRow}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <div className={styles.nav}>
            <Nav show={menuToggleStatus} />
          </div>
          <div className={styles.menubutton}>
            <NavMenuButton clicked={buttonClicked} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
