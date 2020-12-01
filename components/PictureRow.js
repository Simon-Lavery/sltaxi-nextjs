import styles from '../styles/PictureRow.module.css';
import Image from 'next/image';

const PictureRow = ({imgURL, altText, reverse, height, width, children}) => {
const reversed = reverse ? styles.reversed : '';
  return (
    <div className={styles.pictureRow}>
      <div className={styles.picture}>
       <Image src={`/imgs/${imgURL}`} height={height} width={width} layout='responsive'/>
      </div>
      <div className={`${styles.text} ${reversed}`}>
        {children}
      </div>
    </div>
  )
}

export default PictureRow;