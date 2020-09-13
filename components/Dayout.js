import Picture from "../components/Picture";
import PictureRow from "../components/PictureRow";
import styles from "../styles/Dayout.module.css";
import { FaCompass, FaPoundSign, FaGlobe } from "react-icons/fa";
const Dayout = ({
  title,
  id,
  location,
  img,
  about,
  facilities,
  miles,
  price,
  website,
}) => {
  return (
    <div>
      <div className={styles.dayout} id={id}>
        <PictureRow reverse={true}>
          <Picture imgURL={img} altText={`Picture from ${title}`} />
          <div className="text-block">
            <h2>{title}</h2>
            <span className="location">{location}</span>
            <p>{about}</p>
            <p>{facilities}</p>
          </div>
        </PictureRow>
        <div className={styles.travelInfo}>
          <p>
            <FaCompass />
            <span>Distance from Catterick: {miles} miles</span>
          </p>
          <p>
            <FaPoundSign />
            <span>Price in a taxi: £{price} return</span>
          </p>
          <p>
            <FaGlobe />
            <span>
              <a href={website}>{website}</a>
            </span>
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Dayout;
