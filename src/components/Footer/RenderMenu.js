import React from 'react'
import styled from 'styled-components'
import { color } from '../Global/variables'
import { BackText } from '../Global/MenuShared'
import PropTypes from 'prop-types'

const MenuButton = styled(BackText)`
  color: ${color.secondary};
  &: hover {
    color: ${color.offWhite};
  }
`

const ButtonWrapper = styled.div`
  width: 100%;
  text-align: right;
  padding-right: 6em;
@media only screen and (max-width: 1024px) {
  padding-right: 10%;
}
@media only screen and (max-width: 1024px) {
}
`

const RenderMenu = ({ renderMenu }) => {
  return (
    <ButtonWrapper>
      <MenuButton onClick={renderMenu}>Show Menu</MenuButton>
    </ButtonWrapper>
  )
}

export default RenderMenu

RenderMenu.propTypes = {
  renderMenu: PropTypes.func
}
