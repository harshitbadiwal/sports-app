"use client"
import React, { useState } from 'react'
import styles from "./StartPage.module.scss"
const page = () => {
  const [renser,setRender] = useState()
  console.log("DATA")
  
  return (
    <div className={styles.container}>
    <div className={styles.leftSection}>
      <div className={styles.locationPicker}>
        <div className={styles.icon}>
          <img src="/images/location.svg" alt="Location" />
        </div>
        <h2>Seems like you haven't picked a location yet.</h2>
        <p>Explore more venues by selecting a location</p>
        <button className={styles.pickLocationButton}>Pick Your Location</button>
      </div>
    </div>

    <div className={styles.rightSection}>
      <div className={styles.logo}>
      <h1 className={styles.logo}>READY-SET-GO</h1>
      </div>
      <h2>India's Leading Sports Facility Booking Platform</h2>
      <ul className={styles.features}>
        <li>
        
          <img src="/images/Two.svg" alt="Find & book venues" />
          Find & book nearby venues
        </li>
        <li>
          <img src="/images/PhoneLoaction.svg" alt="Find co-players" />
          Find co-players
        </li>
        <li>
          <img src="/images/coins.svg" alt="Playcoins & rewards" />
          Get playcoins & rewards
        </li>
        <li>
          <img src="/images/stadium.svg" alt="Join sports events" />
          Join nearby sports events
        </li>
      </ul>

    </div>
  </div>
  )
}

export default page
