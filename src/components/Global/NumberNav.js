import React from 'react'
import styled from 'styled-components'
import { ServiceNavLinks } from './textSizes'
import { color, weight } from './variables'
import Fade from 'react-reveal/Fade'

const Wrapper = styled.div`
  padding-left: 0.5em;
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`

const activeStyle = {
  color: color.darkLink,
  fontWeight: weight.black
};

const NumberNav = () => {
  return (
    <Fade bottom cascade>
    <Wrapper>
      <ServiceNavLinks
        exit={{ length: 0.5 }}
        entry={{ delay: 0.8 }}
        to='/WebDesign'
        partiallyActive={true}
        activeStyle={activeStyle}>01</ServiceNavLinks>
      <hr/>
      <ServiceNavLinks
        exit={{ length: 0.5 }}
        entry={{ delay: 0.8 }}
        to='/WebDevelopment'
        partiallyActive={true}
        activeStyle={activeStyle}>02</ServiceNavLinks>
      <hr/>
      <ServiceNavLinks
        exit={{ length: 0.5 }}
        entry={{ delay: 0.8 }}
        to='/WebGraphics'
        partiallyActive={true}
        activeStyle={activeStyle}>03</ServiceNavLinks>
      <hr/>
      <ServiceNavLinks
        exit={{ length: 0.5 }}
        entry={{ delay: 0.8 }}
        to='/SEO'
        partiallyActive={true}
        activeStyle={activeStyle}>04</ServiceNavLinks>
      <hr/>
    </Wrapper>
    </Fade>
  )
}

export default NumberNav
