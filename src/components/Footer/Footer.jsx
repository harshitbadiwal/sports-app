import React from 'react'
import styles from "./Footer.module.scss"
const Footer = () => {
  return <>
    <footer className={styles.footer}>
  <div className={styles.container}>
    <div className={styles.logoSection}>
      <h2 className={styles.logo}>READY-SET-GO</h2>
      <p>Your ultimate sports venue companion.</p>
    </div>
    <div className={styles.linksSection}>
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#venues">Venues</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About Us</a></li>
      </ul>
    </div>
    <div className={styles.socialSection}>
      <h3>Follow Us</h3>
      <div className={styles.socialIcons}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </div>
  <div className={styles.footerBottom}>
    <p>&copy; 2024 PlaySpots. All Rights Reserved.</p>
  </div>
</footer>
  </>
}

export default Footer
