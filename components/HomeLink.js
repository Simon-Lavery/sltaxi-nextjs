import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import styles from "../styles/HomeLink.module.css";
const HomeLink = () => {
  return (
    <div className='content'>
      <Link href="/">
        <a className={styles.homelink}>
          <FaArrowLeft />
          <span>Back to the Home page</span>
        </a>
      </Link>
    </div>
  );
};

export default HomeLink;
