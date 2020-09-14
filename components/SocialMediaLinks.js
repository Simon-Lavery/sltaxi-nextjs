import styles from "../styles/SocialMediaLinks.module.css";
import { FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";
const SocialMediaLinks = () => {
  return (
    <div className={styles.socialMediaLinks}>
      <div className="content">
        <IconContext.Provider value={{ className: styles.icon }}>
          <a href="https://www.facebook.com/SLTaxiCatterick">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/sltaxicatterick/">
            <FaInstagram />
          </a>
          <a href="https://g.page/sltaxi-catterick-garrison?gm">
            <FaGoogle />
          </a>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
