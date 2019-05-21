import React from 'react'
import { graphicsData } from '../Copy/copy'
import PortfolioLink from '../Global/PortfolioLink'
import { HeadingText, MobileWidthWrapper, ServicesWrapper, Divider } from '../Global/Shared'
import { H2Services, ListItem, BodyText } from '../Global/textSizes'
import Fade from 'react-reveal/Fade'

const MainContent = () => {
  return (
    <>
    {
      graphicsData.map(data =>
        <Fade key={data.key} bottom cascade>
        <MobileWidthWrapper>
          <HeadingText>{data.title}</HeadingText>
          <BodyText>{data.description}</BodyText>
          <ServicesWrapper>
              <H2Services>Services</H2Services>
              <ul>
              {data.services.map(service =>
                <ListItem key={service}>{service}</ListItem>
              )}
              </ul>
          </ServicesWrapper>
          <Fade delay={600}>
          <Divider />
          </Fade>
          <PortfolioLink />
          </MobileWidthWrapper>
        </Fade>
      )
    }
    </>
  )
}

export default MainContent
