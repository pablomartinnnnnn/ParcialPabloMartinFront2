import React from 'react'
import styles from '../App.module.css';

export const Card = ({name, favoriteDrug}) => {
 

 
    return (
    <div className={styles.cardContainer}>

      <h2 className={styles.cardTitle}>Your Card</h2>
      <p className={styles.cardContent}>Hi {name}!</p>
      <p className={styles.cardContent}>Your Favorite Drug is: {favoriteDrug}</p>


    </div>
  )
}
