import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { color, font, weight, spacing } from './variables'

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  justify-content: flex-end;
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
     <NavContainer>
      <LinkStyle
        to='/WebDesignPage'
        partiallyActive={true}
        activeStyle={activeStyle}>Web Design</LinkStyle>
      <hr/>
      <LinkStyle
        to='/DevelopmentPage'
        partiallyActive={true}
        activeStyle={activeStyle}>Web Development</LinkStyle>
      <hr/>
      <LinkStyle
        to='/WebGraphicsPage'
        partiallyActive={true}
        activeStyle={activeStyle}>Web Graphics</LinkStyle>
      <hr/>
      <LinkStyle
        to='/SeoOptPage'
        partiallyActive={true}
        activeStyle={activeStyle}>SEO Optimisation</LinkStyle>
      </NavContainer>
    </Wrapper>
  )
}

export default BottomNav
