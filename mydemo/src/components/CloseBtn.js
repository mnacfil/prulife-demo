import React from 'react'
import { IoIosClose } from 'react-icons/io';
import styled from 'styled-components';

const CloseBtn = ({ closeHandler }) => {
  return (
    <StyleButton
        className='close-btn'
        onClick={closeHandler}
    >
      <IoIosClose />
    </StyleButton>
  )
}
const StyleButton = styled.button`
  &.close-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      background: none;
      border: none;
      color: red;
      font-size: 1.75rem;
      cursor: pointer;
  }
`;

export default CloseBtn