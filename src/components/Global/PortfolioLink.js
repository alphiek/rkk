import React from 'react'
import Link from 'gatsby-plugin-transition-link'
import styled from 'styled-components'
import { color, font, weight, spacing } from './variables'
import Fade from 'react-reveal/Fade'

const Wrapper = styled.div`
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
      font-size: 0.6em;
}
@media only screen
    and ( max-width: 824px)
    and (max-height: 824px) {
      font-size: 0.8em;
      padding: 2em 0 1em 0;
    }
@media only screen
    and (max-width: 824px)
    and (orientation: landscape) {
      font-size: 0.6em;
    }
`

const PortfolioLink = () => {
  return (
    <Fade bottom delay={200}>
    <Wrapper>
      <LinkStyle
        exit={{ length: 0.5 }}
        entry={{ delay: 0.2 }}
        to='/PortfolioPage/'
        partiallyActive={true}>View Portfolio ------------------</LinkStyle>
    </Wrapper>
   </Fade>
  )
}

export default PortfolioLink
