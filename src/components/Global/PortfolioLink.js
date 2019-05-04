import React from 'react'
import Link from 'gatsby-plugin-transition-link'
import styled from 'styled-components'
import { color, font, weight, spacing } from './variables'
import Fade from 'react-reveal/Fade'

const Wrapper = styled.div`
  margin-top: 0.5em;
`

const LinkStyle = styled(Link)`
  line-height: 100%;
  font-family: ${font.heebo};
  font-weight: ${weight.bold};
  letter-spacing: ${spacing.wide};
  color: ${color.secondary};
  text-transform: uppercase;
  font-size: 0.5em;
  @media (min-width: 824px) and (max-width: 1024px) {
    font-size: 0.7em;
  }
`

const PortfolioLink = () => {
  return (
    <Fade bottom delay={1200}>
    <Wrapper>
      <LinkStyle
        exit={{ length: 0.5 }}
        entry={{ delay: 0.8 }}
        to='/PortfolioPage/'
        partiallyActive={true}>View Portfolio -----------------------</LinkStyle>
    </Wrapper>
   </Fade>
  )
}

export default PortfolioLink
