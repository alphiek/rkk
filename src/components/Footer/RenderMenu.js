import React from 'react'
import styled from 'styled-components'
import { color } from '../Global/variables'
import { BackText } from '../Global/MenuShared'
import { Back } from '../Contact/BackButton'
import PropTypes from 'prop-types'

const MenuButton = styled(BackText)`
`

const ButtonWrapper = styled(Back)`
@media only screen and (max-width: 1024px) {
    border: 0.15em solid ${color.secondary};
    float: left;
    margin-left: 0;
    margin-right: 2%;
}
@media only screen and (max-width: 570px) {
    margin-left: 0;
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
