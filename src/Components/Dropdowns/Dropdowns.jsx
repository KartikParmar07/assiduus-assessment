import React, { useEffect } from 'react'
import styles from './Dropdowns.module.css'

const Dropdowns = (props) => {

    const data = props.data;
    const callback = props.callback;
    const callbackDiff = props.callbaclDiff;


    function handleChange(e){
      const data = e.target.value;
      if(callbackDiff){
        callbackDiff(data)
      }
      else callback(data);
      
    }

    


  return (
    <>
    <select name="Manage" id="Manage" className={styles.dropdown} onChange={handleChange}>
        {data.map((elem, index)=>{
            return <option key={index} value={elem} id={elem} >{elem}</option>
        })}       
    </select>
    </>
  )
}

export default Dropdowns