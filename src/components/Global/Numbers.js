import React from 'react'
import Link from 'gatsby-plugin-transition-link'
import styled from 'styled-components'
import { color, font, weight, spacing } from './variables'
import Fade from 'react-reveal/Fade'

const Wrapper = styled.div`
  padding-left: 0.5em;
@media only screen
    and (max-width: 824px) {
      display: none;

    }
`

const LinkStyle = styled(Link)`
color: ${color.grey};
font-family: ${font.muli};
font-weight: ${weight.light};
font-size: 0.45em;
letter-spacing: ${spacing.small};
text-transform: uppercase;
line-height: 100%;
`
const activeStyle = {
  color: color.body,
  fontWeight: weight.black
};

const NumberNav = () => {
  return (
    <Fade bottom cascade delay={1200}>
    <Wrapper>
      <LinkStyle
        exit={{ length: 0.5 }}
        entry={{ delay: 0.8 }}
        to='/WebDesignPage'
        partiallyActive={true}
        activeStyle={activeStyle}>01</LinkStyle>
      <hr/>
      <LinkStyle
        exit={{ length: 0.5 }}
        entry={{ delay: 0.8 }}
        to='/DevelopmentPage'
        partiallyActive={true}
        activeStyle={activeStyle}>02</LinkStyle>
      <hr/>
      <LinkStyle
        exit={{ length: 0.5 }}
        entry={{ delay: 0.8 }}
        to='/WebGraphicsPage'
        partiallyActive={true}
        activeStyle={activeStyle}>03</LinkStyle>
      <hr/>
      <LinkStyle
        exit={{ length: 0.5 }}
        entry={{ delay: 0.8 }}
        to='/SeoOptPage'
        partiallyActive={true}
        activeStyle={activeStyle}>04</LinkStyle>
      <hr/>
    </Wrapper>
    </Fade>
  )
}

export default NumberNav
