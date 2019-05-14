import React from 'react'
import styled from 'styled-components'
import { color, font, weight } from '../Global/variables'
import PropTypes from 'prop-types'

const MobileLinkContainer = styled.div`
  background-color: ${color.primary};
  position: absolute;
  bottom: 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  min-height: 7em;
`
const LinkMobile = styled.p`
  font-size: 1.2em;
  border: 0.2em solid ${color.secondary};
  padding: 2.5vw 3vw;
  margin: 4%;
  font-weight: ${weight.black};
  font-family: ${font.muli};
  color: ${color.white};
  z-index: 8;
  text-transform: uppercase;
  min-height: 2em;
  min-width: 5em;

  @media only screen
      and (max-width: 1024px)
      and (orientation: portrait) {
        font-size: 1em;
      }
`

const FooterButton = ({ isHidden, toggleHidden }) => {
  return (
    <>
    {
      isHidden ?
      <MobileLinkContainer onClick={toggleHidden}>
        <LinkMobile onClick={toggleHidden} >Browse</LinkMobile>
      </MobileLinkContainer>
      :
      null
    }
    </>
  )
}

export default FooterButton

FooterButton.propTypes = {
  toggleHidden: PropTypes.func.isRequired,
  isHidden: PropTypes.bool.isRequired,
}
