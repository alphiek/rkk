import React from 'react'
import Link from 'gatsby-plugin-transition-link'
import styled from 'styled-components'
import { color, font, weight, spacing } from './variables'
import Fade from 'react-reveal/Fade'

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  background: white;
  padding-top: 1em;

@media only screen
    and (max-width: 824px) {
      display: none;
    } 
`
const NavContainer = styled.div`
  display: flex;
  margin-bottom: 1em;
  margin-right: 1em;
`
const LinkStyle = styled(Link)`
  color: ${color.grey};
  font-family: ${font.muli};
  font-weight: ${weight.light};
  font-size: 0.45em;
  letter-spacing: ${spacing.large};
  text-transform: uppercase;
  line-height: 100%;
  padding-left: 1em;
  padding-right: 1em;
`

const activeStyle = {
  color: color.body,
  fontWeight: weight.black,
};

const BottomNav = () => {
  return (
    <Wrapper>
    <Fade bottom cascade delay={1200}>
     <NavContainer>
      <LinkStyle
        exit={{ length: 0.5 }}
        entry={{ delay: 0.8 }}
        to='/WebDesignPage'
        partiallyActive={true}
        activeStyle={activeStyle}>Web Design</LinkStyle>
      <hr/>
      <LinkStyle
        exit={{ length: 0.5 }}
        entry={{ delay: 0.8 }}
        to='/DevelopmentPage'
        partiallyActive={true}
        activeStyle={activeStyle}>Web Development</LinkStyle>
      <hr/>
      <LinkStyle
        exit={{ length: 0.5 }}
        entry={{ delay: 0.8 }}
        to='/WebGraphicsPage'
        partiallyActive={true}
        activeStyle={activeStyle}>Web Graphics</LinkStyle>
      <hr/>
      <LinkStyle
        exit={{ length: 0.5 }}
        entry={{ delay: 0.8 }}
        to='/SeoOptPage'
        partiallyActive={true}
        activeStyle={activeStyle}>SEO Optimisation</LinkStyle>
      </NavContainer>
      </Fade>
    </Wrapper>
  )
}

export default BottomNav
