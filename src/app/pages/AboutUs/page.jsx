import React from 'react'
import styles from "./AboutUs.module.scss"
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
const AboutUs = () => {
  return<>
  <Header/>
      <div className={styles.aboutUs}>
      <header className={styles.hero}>
        <div className={styles.overlay}></div>
        <h1 className={styles.title}>About Us</h1>
        <p className={styles.subtitle}>
          We are passionate about connecting people through sports and
          recreation.
        </p>
      </header>

      <section className={styles.content}>
        <div className={styles.section}>
          <h2 className={styles.heading}>Our Mission</h2>
          <p className={styles.text}>
            Our mission is to provide an innovative platform for players and
            sports enthusiasts to book and discover sporting venues and events
            with ease.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.heading}>Why Choose Us?</h2>
          <ul className={styles.list}>
            <li>Easy-to-use platform</li>
            <li>Wide range of venues and activities</li>
            <li>Community-driven sports initiatives</li>
          </ul>
        </div>
      </section>
      </div>
      <Footer/>
  </>
}

export default AboutUs
