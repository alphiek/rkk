import React from 'react'
import styled from 'styled-components'
import { BrowseLink } from '../Global/nonTransitionLinks'
import { color } from '../Global/variables'
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
const LinkMobile = styled(BrowseLink)`
  padding: 3vw 3.5vw;
  margin: 5vw;
  z-index: 8;
  min-height: 2em;
  min-width: 5em;
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
