import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import { PortfolioLnk } from './textSizes'

const Wrapper = styled.div`
@media only screen
    and (max-width: 1024px) {
      margin-top: 1em;
    }
`

const PortfolioLink = () => {
  return (
    <Fade bottom delay={400}>
    <Wrapper>
      <PortfolioLnk
        exit={{ length: 0.5 }}
        entry={{ delay: 0.8 }}
        to='/PortfolioPage/'
        partiallyActive={true}>View Portfolio -----------</PortfolioLnk>
    </Wrapper>
   </Fade>
  )
}

export default PortfolioLink
