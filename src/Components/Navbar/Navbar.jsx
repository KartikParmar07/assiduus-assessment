import React from "react";
import styles from "./Navbar.module.css";
import SearchInput from "../Search/Searchbar";
import Icon from "../Icons/Icons";
import Hamberger from "../Hamburger/Hamberger";

const Navbar = ({callback}) => {



  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.iconBar}>
          <Hamberger/>
          <button onClick={callback}>Randomize</button>
          <SearchInput />
          <Icon iconName="bell"/>
          <div className={styles.userIcons}>
            <div className={styles.userProfile}/> 
            <Icon iconName="caret-down" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
