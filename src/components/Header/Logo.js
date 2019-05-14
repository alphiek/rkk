import React from 'react'
import styled from 'styled-components'
import { color, font, weight } from '../Global/variables'

const LogoWrapper = styled.div`
  height: 2.5em;
  width: 'auto';
  margin: 0.6em;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
`
const LogoText = styled.p`
  font-family: ${font.muli};
  color: ${color.body};
  font-size: 1em;
  font-weight: ${weight.black};
  border-bottom: 0.25em solid ${color.secondary};
  line-height: 130%;
  @media only screen
      and (max-width: 1024px) {
        font-size:0.9em;
      }
`

const Logo = () => {
  return (
    <LogoWrapper>
      <LogoText>RKK</LogoText>
    </LogoWrapper>
  )
}

export default Logo
