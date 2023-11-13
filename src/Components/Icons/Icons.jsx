import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icons = (props) => {

    const iconName = props.iconName;

    let Icon = styled(FontAwesomeIcon)`
    color: black;
    height: 18px
  `;

  return (
    <>
        <Icon icon={iconName} className='icons'/>
    </>
  )
}

export default Icons