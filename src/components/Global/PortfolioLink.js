import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import { PortfolioLnk } from './textSizes'

const Wrapper = styled.div`
@media only screen
    and (max-width: 1024px) {
      margin-top: 1em;
      margin-bottom: 2.5em;
    }
`

const PortfolioLink = () => {
  return (
    <Fade bottom delay={400}>
    <Wrapper
      aria-label='Link to Portfolio'>
      <PortfolioLnk
        exit={{ length: 0.5 }}
        entry={{ delay: 0.8 }}
        to='/Portfolio/'
        partiallyActive={true}>View Portfolio</PortfolioLnk>
    </Wrapper>
   </Fade>
  )
}

export default PortfolioLink
