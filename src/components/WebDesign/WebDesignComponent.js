import React from 'react'
import Fade from 'react-reveal/Fade'
import { webdesignData } from '../Copy/copy'
import ImageDeck from './ImageDeck'
import PortfolioLink from '../Global/PortfolioLink'
import { HeadingText, ServicesWrapper } from '../Global/Shared'
import { H2Services, ListItem, BodyText } from '../Global/textSizes'
import { ServiceFlexWrapper, LeftWrapper, RightWrapper } from '../Global/ServiceFlexWrapper'

const WebDesignComponent = () => {
  return (
    <ServiceFlexWrapper>
    {
      webdesignData.map(data =>
        <LeftWrapper key={data.key}>
              <Fade bottom delay={200}>
              <HeadingText>{data.title}</HeadingText>
              <BodyText>{data.description}</BodyText>
              <ServicesWrapper>
                <H2Services>Services</H2Services>
                <ul>
                  {
                  data.services.map(service =>
                  <ListItem key={service}>{service}</ListItem>
                  )
                  }
                </ul>
              </ServicesWrapper>
              </Fade>
            <PortfolioLink/>
        </LeftWrapper>
      )
    }
      <RightWrapper>
        <ImageDeck />
      </RightWrapper>
    </ServiceFlexWrapper>
  )
}
export default WebDesignComponent
