import React from 'react'
import styles from './Logo.module.css'

const Logo = (props) => {
  return (
    <div className={styles.logoBox}>
        <img src={props.image} alt="Logo" className={styles.logo}/>
    </div>
  )
}

export default Logo