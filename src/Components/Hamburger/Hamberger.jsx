import React, { useState } from "react";
import styles from "./Hamburger.module.css";

const Hamburger = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobilemenu");

    console.log("Menu", mobileMenu);

    if (mobileMenu) {
      setMobileMenuOpen(!isMobileMenuOpen);
      mobileMenu.style.display = isMobileMenuOpen ? "none" : "block";
    }
  };  

  return (
    <>
      <div className={styles.hamburger} onClick={toggleMobileMenu}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </>
  );
};

export default Hamburger;
