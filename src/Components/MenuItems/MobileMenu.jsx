import React, { useState } from 'react'
import styles from './Menu.module.css'

const MobileMenu = (props) => {

    const {callback, items} = props;
    const [isActive, setIsActive] = useState('Dashboard');
  
    const handleMenuItemClick = (item) => {
      callback(item);
      setIsActive(item.name);
    }
  
    useState(()=>{
      console.log(isActive)
    },[isActive])

  return (
    <div className={styles.mobileMenu} id='mobilemenu' >
         {items &&
          items.map((item, index) => {
            return (
                <div className={styles.menuitem} key={index} onClick={()=>handleMenuItemClick(item)} style={isActive===item.name ? { backgroundColor: "var(--dark-pastel-green)" } : {}}>{item.name}</div>
            );
          })}
    </div>
  )
}

export default MobileMenu