import styles from "../../styles/layout/Footer.module.css";
import Link from "next/link";
import SocialMediaLinks from "../SocialMediaLinks";
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="content">
      <SocialMediaLinks />
        <div className={styles.contact}>
          <div className={styles.tel}>
            <a href="tel:01748883370">Tel: 01748 883370</a>
          </div>
          <div className={styles.email}>
            <a href="mailto:sltaxicatterick@gmail.com">
              Email: sltaxicatterick@gmail.com
            </a>
          </div>
        </div>
        <div className={styles.privacy}>
          <Link href="/privacy-policy">
            <a>Privacy policy</a>
          </Link>
        </div>
        <div className={styles.catOnline}>
          <span>site by</span>
          <a href="https://catterickonline.co.uk">
            <Image src="/imgs/catterickonlinelogo.png" height={39} width={398} layout="responsive"/>
          </a>
        </div>
        <span className={styles.copy}>
          SLTaxi is a trading name of Simon Lavery
        </span>
        <span>&copy; 2020 All rights reserved.</span>
      </div>
      
    </footer>
  );
};

export default Footer;
