import Link from "next/link";
import styles from "../../../styles/header/navbar/Logo.module.css";
import Image from 'next/image';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <a>
          <Image src="/imgs/logo3.png" height={89} width={318} title="Go to the homepage" alt="SLTaxi Catterick garrison logo"/>
        </a>
      </Link>
      
    </div>
  );
};

export default Logo;
