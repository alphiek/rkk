import React from 'react'
import { PortfolioPageWrapper, PortfolioWrapper, HeadingText, BodyText } from '../Global/Shared'
import GridContainer from './GridContainer'
import { TransWrap } from '../Global/TransWrap'

const PortfolioComponent = () => {
  return (
    <TransWrap>
    <PortfolioPageWrapper>
      <PortfolioWrapper>
        <HeadingText>Latest Work</HeadingText>
          <BodyText>
          This design is fucking brilliant. Never, never assume that what you have achieved is fucking good enough.
          Remember it’s called the creative process, it’s not the creative fucking moment. Use your fucking hands.
          Think about all the fucking possibilities. Why are you fucking reading all of this? Get back to work.
          </BodyText>
      </PortfolioWrapper>
      <GridContainer />
    </PortfolioPageWrapper >
  </TransWrap>
  )
}

export default PortfolioComponent
