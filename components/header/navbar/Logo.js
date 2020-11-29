import Link from "next/link";
import styles from "../../../styles/header/navbar/Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <a>
          <img src="/imgs/logo3.png" title="Go to the homepage" />
        </a>
      </Link>
      
    </div>
  );
};

export default Logo;
