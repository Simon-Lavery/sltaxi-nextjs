import styles from "../../styles/layout/Footer.module.css";
import Link from "next/link";
import Image from 'next/image';
import { FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="content">
      <h4>Contact details</h4>
        <div className={styles.social}>
        <a href="https://www.facebook.com/SLTaxiCatterick">
            <span className='sr-only'>Link to SlTaxi Catterick on facebook</span>
            <FaFacebookF />
            <span>Facebook page</span>
          </a>
          <a href="https://www.instagram.com/sltaxicatterick/">
          <span className='sr-only'>Link to SlTaxi Catterick on instagram</span>
            <FaInstagram />
            <span>Instagram profile</span>
          </a>
          <a href="https://g.page/sltaxi-catterick-garrison?gm">
            <span className='sr-only'>Link to SlTaxi Catterick's google business page</span>
            <FaGoogle />
            <span>Google business page</span>

          </a>
        </div>
        <div className={styles.contact}>
          <div className={styles.tel}>
            <span>Tel: </span>
            <a href="tel:01748883370">01748 883370</a>
          </div>
          <div className={styles.email}>
            <span>Email: </span>
            <a href="mailto:sltaxicatterick@gmail.com">
              sltaxicatterick@gmail.com
            </a>
          </div>
        </div>

        <div className={styles.catOnline}>
          <span>site by</span>
          <a href="https://catterickonline.co.uk">
            <Image src="/imgs/catterickonlinelogo.png" height={39} width={398} layout="responsive"/>
          </a>
        </div>

        <div className={styles.privacy}>
          <span>View our</span>
          <Link href="/privacy-policy">
            <a>Privacy policy</a>
          </Link>
        </div>

        <div className={styles.copy}>
          <span>
            SLTaxi is a trading name of Simon Lavery
          </span>
          <span>&copy; 2020 All rights reserved.</span>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
