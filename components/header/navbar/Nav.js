import styles from "../../../styles/header/navbar/Nav.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = ({ show }) => {
  const router = useRouter();
  const links = [
    {
      display: 'Home',
      url: '/'
    },
    {
      display: 'Station transfers',
      url: '/station'
    },
    {
      display: 'Airport transfers',
      url: '/airport'
    },
    {
      display: 'Blog',
      url: '/blog'
    }
  ];
  
  const menu = show ? styles.show : "";
  console.log(router.pathname)
  return (
    <nav className={`${styles.nav} ${menu}`} aria-label='Main'>
      <ul>
        {links.map(link => (
          <li key={link.url}>
          <Link href={link.url}>
            <a className={link.url === router.pathname ? styles.active : ''}>{link.display}</a>
          </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
