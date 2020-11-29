import styles from "../styles/SocialMediaLinks.module.css";
import { FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";
const SocialMediaLinks = () => {
  return (
    <div className={styles.socialMediaLinks}>
      <div className="content">
        <IconContext.Provider value={{ className: styles.icon }}>
          <a href="https://www.facebook.com/SLTaxiCatterick">
            <span className='sr-only'>Link to SlTaxi Catterick on facebook</span>
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/sltaxicatterick/">
          <span className='sr-only'>Link to SlTaxi Catterick on instagram</span>
            <FaInstagram />
          </a>
          <a href="https://g.page/sltaxi-catterick-garrison?gm">
            <span className='sr-only'>Link to SlTaxi Catterick's google business page</span>
            <FaGoogle />
          </a>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
