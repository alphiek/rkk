import React from 'react'
import styled from 'styled-components'
import { color, font, weight } from '../Global/variables'

const MobileLinkContainer = styled.div`
  height: 10em;
  background-color: ${color.primary};
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;

  @media only screen
      and (max-width: 960px)
      and (orientation: landscape) {
        display:none;
      }
  @media only screen
      and (max-height: 600px)
      and (max-width: 1024px)
      and (orientation: landscape) {
        display: none;
  }

  @media only screen
      and (max-height: 767px)
      and (orientation: portrait) {
        height:7em;
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
      and (max-width: 960px)
      and (orientation: landscape) {
        display:none;
      }
  @media only screen
      and (max-height: 767px)
      and (orientation: portrait) {
        font-size:1em;
      }

`

const BrowseBtn = (props) => {
  return (
    <MobileLinkContainer onClick={props.toggleHidden}>
      <LinkMobile onClick={props.toggleHidden} >Browse</LinkMobile>
    </MobileLinkContainer>
  )
}

export default BrowseBtn
