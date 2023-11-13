import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InputContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: black; /* Adjust the color as needed */
`;

const Input = styled.input`
  padding-left: 30px; /* Adjust the padding to make room for the icon */
  height: 35px; /* Adjust the height as needed */
  width:150px;
  background-color: var(--grey);
  border:none;
  border-radius:10px;
`;

const MyInputWithIcon = () => {
  return (
    <InputContainer>
      <Icon icon="search" /> {/* Use the icon name you added to the library */}
      <Input type="text" />
    </InputContainer>
  );
};

export default MyInputWithIcon;
