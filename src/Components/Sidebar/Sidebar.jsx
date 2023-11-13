import React, { useEffect, useState } from 'react'
import styles from './Sidebar.module.css'
import Logo from '../Logo/Logo'
import LogoImage from '../../Assets/assiduus-logo-dark.png'
import LogoIconImage from '../../Assets/assiduus-logo-dark-mobile.png'
import MenuItems from '../MenuItems/Menu'
import { items } from './MenuItems'

const Sidebar = (props) => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1450);
  };

  useEffect(()=>{
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  })


  return (
    <>
    <div className={styles.sidebar}>
      {isDesktop ? (
        <Logo image={LogoImage} />
      ) : (<Logo image={LogoIconImage} />)
      }
      
      
      <MenuItems items={items} callback={props.callback}/>
    </div>
    </>
  )
}

export default Sidebar;