import React from 'react'
import styled from "styled-components";
import { color } from '../Global/variables'

const BurgerMenu = styled.div`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1.5em;
  height: 1.1em;
  cursor: pointer;
  z-index: 6;

  @media (min-width: 768px) and (max-width: 1024px) {
   margin-top: 0.5em;
   height: 1.6em;
   width: 2em;
  }

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape)  {
    margin-top: 0.5em;
    height: 1.4em;
    width: 2.2em;
   }

   @media (min-width: 481px) and (max-width: 767px) and (orientation: portrait) {
     margin-top: 0.5em;
     height: 1.4em;
     width: 2.2em;
   }

   @media (min-width: 481px) and (max-width: 767px) and (orientation: landscape) {
     margin-top: 0.5em;
     height: 1.2em;
     width: 1.8em;
   }

   @media (min-width: 320px) and (max-width: 480px) and (orientation: portrait) {
     margin-top: 0.5em;
     height: 1.6em;
     width: 1.8em;
   }
`;

const TopLine = styled.span`
  width: 100%;
  height: 5px;
  background-color: ${color.secondary};
  transition: 0.5s;
  @media (max-width: 824px) and (orientation: portrait) {
    height: 5px;
  }

  @media (max-width: 330px) and (orientation: portrait) {
    height: 3px;
  }

  ${BurgerMenu}: hover & {
    transform: scaleX(0.5);
    transform-origin: right;
  }
`;

const MidLine = styled(TopLine)`
  ${BurgerMenu}: hover & {
    transform: scaleX(0.6);
  }
`;
const BottomLine = styled(TopLine)`
  ${BurgerMenu}: hover & {
    transform: scaleX(0.7);
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  z-index: 6;
`

const Burger = (props) => {
  const close = props.isHidden
  return (
    <React.Fragment>
    {
      close ?
      <BurgerMenu onClick={props.onClick}>
        <TopLine />
        <MidLine />
        <BottomLine />
      </BurgerMenu>
      :
      <CloseBtn onClick={props.onClick}>Close</CloseBtn>
    }
    </React.Fragment>
  )
}

export default Burger
