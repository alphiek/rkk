import React from 'react'
import styled from 'styled-components'
import { color, font, weight, spacing } from '../Global/variables'

const MenuButton = styled.button`
  font-size: 0.8em;
  font-family: ${font.heebo};
  letter-spacing: ${spacing.wide};
  text-transform: uppercase;
  color: ${color.secondary};
  font-weight: ${weight.black};
  line-height: 130%;
  background-color: transparent;
  border: none;
`

const RenderMenu = (props) => {
  return (
    <div>
      <MenuButton onClick={props.renderMenu}>Menu</MenuButton>
    </div>
  )
}

export default RenderMenu
