import React from 'react'
import styled from 'styled-components'
import { LogoLink } from '../Global/nonTransitionLinks'

const LogoWrapper = styled.div`
  height: 2.5em;
  width: 'auto';
  margin: 0.6em;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 8;
`

const Logo = () => {
  return (
    <LogoWrapper>
      <LogoLink
        aria-label='Link to Home Page'
        to='/'
        partiallyActive={true}>
        RKK
      </LogoLink>
    </LogoWrapper>
  )
}

export default Logo
