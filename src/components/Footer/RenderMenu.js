import React from 'react'
import styled from 'styled-components'
import { color } from '../Global/variables'
import { BackText } from '../Global/MenuShared'
import PropTypes from 'prop-types'

const MenuButton = styled(BackText)`
  width: 100%;
  color: ${color.secondary};
  &: hover {
    color: ${color.offWhite};
  }

  @media only screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    `

const ButtonWrapper = styled.div`
    width: 95vw;
    text-align: right;
    padding-right: 6em;
    overflow: hidden;
@media only screen and (max-width: 1024px) {
    border: 0.1em solid hsl(181,97%,44%);
    width: 30vw;
    padding: 0.67em 0;
    float: right;
    margin-left: 11%;
}
@media only screen and (max-width: 824px) {
    width: 80vw;
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
