import { useState, useEffect } from "react";
import styles from "../../../styles/layout/navbar/Navbar.module.css";
import Nav from "./Nav";
import NavMenuButton from "./NavMenuButton";
import Logo from "./Logo";
const Navbar = () => {
  // keep track of mobile menu open/clos
  const [menuToggleStatus, setMenuToggleStatus] = useState(false);

  const toggleMenu = () => {
    setMenuToggleStatus(!menuToggleStatus);
  };

  const closeMenu = () => {
    if (menuToggleStatus) {
      setMenuToggleStatus(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", closeMenu);
    return () => window.removeEventListener("scroll", closeMenu);
  });

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
            <NavMenuButton toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
