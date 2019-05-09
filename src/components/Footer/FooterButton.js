import React from 'react'
import styled from 'styled-components'
import { color, font, weight } from '../Global/variables'
import PropTypes from 'prop-types'

const MobileLinkContainer = styled.div`
  height: 10em;
  background-color: ${color.primary};
  position: absolute;
  bottom: 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  @media only screen
      and (max-width: 768px)
      and (max-height: 1024px)
      and (orientation: portrait) {
        height: 7em;
      }

  @media only screen
      and (max-width: 824px)
      and (max-height: 824px) {
        height: 7em;
      }
  @media only screen
      and (max-width: 320px) {
        height: 5em;
      }
  @media only screen
      and (max-height:1024px)
      and (orientation: landscape) {
        height: 5em;
      }
`
const LinkMobile = styled.p`
  font-size: 1.2em;
  border: 0.2em solid ${color.secondary};
  padding: 1em 1.5em;
  font-weight: ${weight.black};
  font-family: ${font.muli};
  color: ${color.white};
  z-index: 8;
  text-transform: uppercase;

  @media only screen
      and (max-width: 768px)
      and (max-height: 1024px)
      and (orientation: portrait) {
        font-size: 1em;
      }
  @media only screen
      and (max-height: 767px)
      and (orientation: portrait) {
        font-size:1em;
      }
  @media only screen
      and (max-height: 1024px)
      and (orientation: landscape) {
        font-size: 0.9em;
        padding: 0.4em 0.7em;
        border: 0.15em solid ${color.secondary};
      }
`

const FooterButton = ({toggleHidden}) => {
  return (
    <MobileLinkContainer onClick={toggleHidden}>
      <LinkMobile onClick={toggleHidden} >Browse</LinkMobile>
    </MobileLinkContainer>
  )
}

export default FooterButton

FooterButton.propTypes = {
  toggleHidden: PropTypes.func.isRequired
}
