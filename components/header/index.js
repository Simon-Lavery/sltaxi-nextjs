import styles from "../../styles/header/Index.module.css";
import { FaPhone, FaRegEnvelope } from 'react-icons/fa';
import Navbar from './navbar/Navbar';
import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import HeaderImg from './HeaderImg';

const Header = (
  {
    title1 = 'Part 1 of title',
    title2 = 'Part 2 of title',
    intro = 'intro about the page'
  }
) => {
  const [callButtonText, setCallButtonText] = useState('Book Now')
  
  const handleCall = (e) => {
    e.preventDefault();
    if(isMobile){
      window.open('tel:01748883370')
    }
    else{
      setCallButtonText('01748 883370')
    }
  }
  return (
    <header className={styles.header}>
      {/* header info */}
      <div className='content'>
        <div className={styles.headerInfo}>
        <Navbar/>
        <h1>
          <span>{title1}</span>
          <span>{title2}</span>
        </h1>
        <p>
        {intro}
        </p>
        <div className={styles.headerButtons}>
          <a
          className={`${styles.headerButton} ${styles.emailButton}`} 
          href='mailto:sltaxicatterick@gmail.com'>Email us
          <span>
            <FaRegEnvelope/>
          </span>
          </a>
          <a 
          className={`${styles.headerButton} ${styles.callButton}`} 
          onClick={handleCall}>{callButtonText}
          <span>
            <FaPhone/>
          </span>
          </a>
        </div>
      </div>
      </div>
      {/* header img */}
      <div className={styles.headerImg}>
      <div className={styles.skew} aria-hidden="true"></div>
        <HeaderImg/>
      </div>
    </header>
  )
}

export default Header;