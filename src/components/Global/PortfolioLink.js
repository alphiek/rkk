import React from 'react'
import Link from 'gatsby-plugin-transition-link'
import styled from 'styled-components'
import { color, font, weight, spacing } from './variables'
import Fade from 'react-reveal/Fade'

const Wrapper = styled.div`
@media only screen
    and (max-width: 1024px) {
      margin-top: 2.3em;
    }
`

const LinkStyle = styled(Link)`
  line-height: 100%;
  font-family: ${font.heebo};
  font-weight: ${weight.bold};
  letter-spacing: ${spacing.wide};
  color: ${color.primary};
  text-transform: uppercase;
  font-size: 0.45em;
@media only screen
    and (max-width: 1024px) {
      font-size: 0.7em;
}
`

const PortfolioLink = () => {
  return (
    <Fade bottom delay={400}>
    <Wrapper>
      <LinkStyle
        to='/PortfolioPage/'
        partiallyActive={true}>View Portfolio -----------</LinkStyle>
    </Wrapper>
   </Fade>
  )
}

export default PortfolioLink
