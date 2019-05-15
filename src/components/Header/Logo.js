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
  z-index: 5;
`

const Logo = () => {
  return (
    <LogoWrapper
      aria-label='Link to Home Page'>
      <LogoLink
        to='/'
        partiallyActive={true}>
        RKK
      </LogoLink>
    </LogoWrapper>
  )
}

export default Logo
