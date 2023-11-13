import React, { useEffect, useRef, useState } from "react";
import Dropdown from "../Dropdowns/Dropdowns";
import styles from "./Graphs.module.css";
import { manage, months } from "./Dropdown";

const Header = (props) => {
  const title = props.title;
  const type = props.type;
  const [fileName, setFileName] = useState("");

  const handleFile = (file) => {
    setFileName(file.name);
  };
  // Create a reference to the hidden file input element
  const hiddenFileInput = useRef(null);
  
  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    console.log(fileUploaded);
    handleFile(fileUploaded);
  };


  return (
    <>
      <div className={styles.header}>
        <span>{title}</span>
        <div className={styles.controllers}>
          {type === "Dropdown" ? (
            <>
              <Dropdown data={manage} callback={props.callbackDiff}/>
              <Dropdown data={months} callback={props.callback}/>
            </>
          ) : null}
          {type === "Button" ? (
            <>
              <button onClick={handleClick}>New Sales Invoice</button>
              <input
        type="file"
        onChange={handleChange}
        ref={hiddenFileInput}
        style={{ display: "none" }} // Make the file input element invisible
      />
            </>
          ) : null}
          {type === "Dual" ? (
            <>
              <div className={styles.group}><div className={styles.box1}></div><span>In</span></div>
              <div className={styles.group}><div className={styles.box2}></div><span>Out</span></div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Header;
