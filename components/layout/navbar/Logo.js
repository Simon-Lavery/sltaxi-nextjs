import Link from "next/link";
import styles from "../../../styles/layout/navbar/Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <a>
          <img src="/imgs/logo3.png" title="Go to the homepage" />
        </a>
      </Link>
      <span className={styles.tagline}>
        Unbeatable prices, Unrivalled service
      </span>
    </div>
  );
};

export default Logo;
