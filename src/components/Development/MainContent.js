import React from 'react'
import Fade from 'react-reveal/Fade'
import { devData } from '../Copy/copy'
import PortfolioLink from '../Global/PortfolioLink'
import { HeadingText, Divider, Spacer } from '../Global/Shared'
import { BodyText } from '../Global/textSizes.js'
import { LeftWrapper } from '../Global/ServiceFlexWrapper'


const MainContent = () => {
  return (
    <>
      {
        devData.map(data =>
            <LeftWrapper key={data.key}>
              <Fade bottom delay={200}>
                <HeadingText>{data.title}</HeadingText>
              </Fade>
              <Fade bottom cascade delay={200}>
                <BodyText>{data.description}</BodyText>
                <BodyText>{data.descriptionTwo}</BodyText>
              </Fade>
              <Spacer />
              <Divider />
              <PortfolioLink />
            </LeftWrapper>
        )
      }
    </>
  )
}

export default MainContent
