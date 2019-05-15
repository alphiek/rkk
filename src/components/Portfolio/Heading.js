import React from 'react'
import styled from 'styled-components'
import { color } from '../Global/variables'
import { HeadingText } from '../Global/Shared'
import { PortfolioWrapper } from './PortfolioShared'

export const GridHeading = styled(HeadingText)`
  border-bottom: 0.15em solid ${color.secondary};
  border-left: 0;
  width: 7em;
  padding: 0.2em;
  @media only screen and ( max-width: 1024px ) {
      margin-top: -1em;
  }

`

const Heading = () => {
  return (
    <PortfolioWrapper>
      <GridHeading>Latest Work</GridHeading>
    </PortfolioWrapper>
  )
}

export default Heading
