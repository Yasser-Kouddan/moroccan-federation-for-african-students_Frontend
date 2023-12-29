import React from 'react';
import styles from './styles.module.css'; // Adjust the path based on your project structure
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.waves}>
        <div className={`${styles.wave} ${styles.wave1}`}></div>
        <div className={`${styles.wave} ${styles.wave2}`}></div>
        <div className={`${styles.wave} ${styles.wave3}`}></div>
        <div className={`${styles.wave} ${styles.wave4}`}></div>
      </div>
      <div className={styles.logoContainer}>
        <img src={logo} width="300" height="100" />
      </div>
      <ul className={styles.menu}>
        <li className={styles.menuItem}><a className={styles.menuLink} href="#">Home</a></li>
        <li className={styles.menuItem}><a className={styles.menuLink} href="#">About</a></li>
        <li className={styles.menuItem}><a className={styles.menuLink} href="#">Services</a></li>
        <li className={styles.menuItem}><a className={styles.menuLink} href="#">Team</a></li>
        <li className={styles.menuItem}><a className={styles.menuLink} href="#">Contact</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
