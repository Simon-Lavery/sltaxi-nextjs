import styles from "../../styles/homepage/Offer.module.css";
import Picture from "../Picture";
const Offer = ({ description, imgURL }) => {
  return (
    <div className={styles.offer}>
      <Picture imgURL={imgURL} altText={description} />
      <div className={styles.details}>
        <h3>Details</h3>
        {description}
        <ul className={styles.conditions}>
          <li>Offer for 1 - 4 passengers</li>
          <li>Phone bookings only</li>
        </ul>
      </div>
    </div>
  );
};

export default Offer;
