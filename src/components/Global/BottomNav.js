import React from 'react'
import styled from 'styled-components'
import { ServiceNavLinks } from './textSizes'
import { color, weight } from './variables'
import Fade from 'react-reveal/Fade'

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  overflow: hidden;
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`
const NavContainer = styled.div`
  display: flex;
  margin-bottom: 1em;
  margin-right: 1em;
`
const LinkStyle = styled(ServiceNavLinks)`
  padding-left: 1em;
  padding-right: 1em;
`

const activeStyle = {
  color: color.darkLink,
  fontWeight: weight.black,
};

const BottomNav = () => {
  return (
    <Wrapper>
    <Fade bottom cascade delay={200}>
     <NavContainer>
      <LinkStyle
        exit={{ length: 0.5 }}
        entry={{ delay: 0.8 }}
        to='/web-design'
        partiallyActive={true}
        activeStyle={activeStyle}>Web Design</LinkStyle>
      <hr/>
      <LinkStyle
        exit={{ length: 0.5 }}
        entry={{ delay: 0.8 }}
        to='/web-development'
        partiallyActive={true}
        activeStyle={activeStyle}>Web Development</LinkStyle>
      <hr/>
      <LinkStyle
        exit={{ length: 0.5 }}
        entry={{ delay: 0.8 }}
        to='/web-graphics'
        partiallyActive={true}
        activeStyle={activeStyle}>Web Graphics</LinkStyle>
      <hr/>
      <LinkStyle
        exit={{ length: 0.5 }}
        entry={{ delay: 0.8 }}
        to='/seo'
        partiallyActive={true}
        activeStyle={activeStyle}>SEO Optimisation</LinkStyle>
      </NavContainer>
      </Fade>
    </Wrapper>
  )
}

export default BottomNav
