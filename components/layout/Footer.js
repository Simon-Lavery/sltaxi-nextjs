import styles from "../../styles/layout/Footer.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="content">
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
        <span className={styles.copy}>
          SLTaxi is a trading name of Simon Lavery
        </span>
        <span className={styles.copy}>&copy; 2020 All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
