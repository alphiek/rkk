import React from 'react'
import styled from 'styled-components'
import { BrowseLink } from '../Global/nonTransitionLinks'
import { color } from '../Global/variables'
import PropTypes from 'prop-types'

const MobileLinkContainer = styled.div`
  display: none;
  @media only screen and (max-width: 1024px) {
    display: block;
    background-color: ${color.primary};
    position: absolute;
    bottom: 0px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
    min-height: 9em;
  }

   @media only screen and (max-width: 570px){
    min-height: 10em;
  }
`
const LinkMobile = styled(BrowseLink)`
  padding: 3vw 3.5vw;
  z-index: 8;
  min-height: 4%;
  min-width: 5%;

  @media only screen and (max-width: 570px){
    padding: 6vw 6.5vw;
  }
`

const FooterButton = ({ isHidden, toggleHidden }) => {
  return (
    <>
    {
      isHidden ?
      <MobileLinkContainer onClick={toggleHidden}>
        <LinkMobile
          aria-label='Link to Navigation'
          onClick={toggleHidden}>
          Browse
        </LinkMobile>
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
