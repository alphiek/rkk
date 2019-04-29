import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { color, font, weight, spacing } from './variables'


const Wrapper = styled.div`
  padding-left: 0.5em;
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
    <Wrapper>
      <LinkStyle
        to='/WebDesignPage'
        partiallyActive={true}
        activeStyle={activeStyle}>01</LinkStyle>
      <hr/>
      <LinkStyle
        to='/DevelopmentPage'
        partiallyActive={true}
        activeStyle={activeStyle}>02</LinkStyle>
      <hr/>
      <LinkStyle
        to='/WebGraphicsPage'
        partiallyActive={true}
        activeStyle={activeStyle}>03</LinkStyle>
      <hr/>
      <LinkStyle
        to='/SeoOptPage'
        partiallyActive={true}
        activeStyle={activeStyle}>04</LinkStyle>
      <hr/>
    </Wrapper>
  )
}

export default NumberNav
