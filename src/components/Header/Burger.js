import React from 'react'
import styled from "styled-components";
import { color } from '../Global/variables'
import PropTypes from 'prop-types'

const BurgerMenu = styled.div`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 2.1vw;
  min-width: 40px;
  height: 1.6vw;
  min-height: 30px;
  cursor: pointer;
  z-index: 6;
`
const TopLine = styled.span`
  width: 100%;
  height: 5px;
  background-color: ${color.secondary};
  transition: 0.5s;

  ${BurgerMenu}: hover & {
    transform: scaleX(0.4);
    transform-origin: center;
  }
`;

const MidLine = styled(TopLine)`
  ${BurgerMenu}: hover & {
    transform: scaleX(0.8);
  }
`;
const BottomLine = styled(TopLine)`
  ${BurgerMenu}: hover & {
    transform: scaleX(0.4);
  }
`;


const Burger = ({isHidden, onClick}) => {
  return (
    <>
    {
      isHidden ?
      <BurgerMenu onClick={onClick}>
        <TopLine />
        <MidLine />
        <BottomLine />
      </BurgerMenu>
      :
     null
    }
    </>
  )
}

export default Burger

Burger.propTypes = {
    onClick: PropTypes.func.isRequired,
    isHidden: PropTypes.bool.isRequired,
}
