import React, { useState } from "react";
import styles from "./Menu.module.css";
import Icons from "../Icons/Icons";

const Menu = (props) => {
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
    <>
      <div className={styles.menuContainer}>
        {items &&
          items.map((item, index) => {
            return (
              <div className={styles.textContain} key={index} onClick={()=>handleMenuItemClick(item)} style={isActive===item.name ? { backgroundColor: "var(--dark-pastel-green)" } : {}}>
                <div className={styles.text}>
                  <Icons iconName={item.icon} />
                  {item.name}
                </div>
              </div>
            );
          })}
      </div>

      <div className={styles.iconOnlyMenuContainer}>
        {items &&
          items.map((item, index) => {
            return (
              <div className={styles.textContain} key={index} onClick={()=>handleMenuItemClick(item)} style={isActive===item.name ? { backgroundColor: "var(--dark-pastel-green)" } : {}}>
                {/* <div className={styles.text}> */}
                  <Icons iconName={item.icon} />
                {/* </div> */}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Menu;
