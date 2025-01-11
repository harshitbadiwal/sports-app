'use client'
import React from 'react'
import styles from "./Home.module.scss"
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { useRouter } from "next/navigation";
const Home = () => {
      const Router =useRouter()
  const StartPage=()=>{
    Router.push("/pages/StartPage")
  }
  return <>
  <div className={styles.background}>
  <Header/>
      {/* Hero Section */}
      <section className={styles.hero} >
        <div className={styles.container}>
          <h2 className={styles.heroTitle}>Find & Book Sports Venues Easily</h2>
          <p className={styles.heroSubtitle}>Explore, compare, and book sports facilities in your city.</p>
          <button onClick={()=>StartPage()} className={styles.heroButton}>Get Started</button>
        </div>
      </section>
  </div>


      {/* Features Section */}
      <section id="features" className={styles.features}>
  <div className={styles.container}>
    <h3 className={styles.sectionTitle}>Features</h3>
    <div className={styles.featureGrid}>
      <div className={`${styles.featureCard} ${styles.search}`}>
        <h4>Search Nearby Venues</h4>
        <p>Find sports venues close to your location with ease.</p>
      </div>
      <div className={`${styles.featureCard} ${styles.booking}`}>
        <h4>Easy Booking</h4>
        <p>Book your favorite slots and pay online securely.</p>
      </div>
      <div className={`${styles.featureCard} ${styles.membership}`}>
        <h4>Co-Partner</h4>
        <p>Streamline academy memberships and regular bookings.</p>
      </div>
    </div>
  </div>
</section>
<Footer/>
  </>
}

export default Home
