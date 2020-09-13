import styles from "../../../styles/layout/navbar/Nav.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = ({ show }) => {
  const router = useRouter();
  const links = ["home", "station", "airport", "blog"];
  const menu = show ? styles.show : "";
  return (
    <nav className={`${styles.nav} ${menu}`}>
      <ul>
        {links.map((link) => {
          let href;
          switch (link) {
            case "home":
              href = "/";
              break;
            default:
              href = `/${link}`;
              break;
          }

          let active = router.pathname === href ? styles.active : "";
          return (
            <li key={href} className={active}>
              <Link href={href}>
                <a>{link.toUpperCase()}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
