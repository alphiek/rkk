import React from 'react'
import Fade from 'react-reveal/Fade'
import { webdesignData } from '../Copy/copy'
import PortfolioLink from '../Global/PortfolioLink'
import { HeadingText, ServicesWrapper } from '../Global/Shared'
import { H2Services, ListItem, BodyText } from '../Global/textSizes'
import { LeftWrapper } from '../Global/ServiceFlexWrapper'

const MainContent = () => {
  return (
    <>
      {
        webdesignData.map(data =>
          <LeftWrapper key={data.key}>
            <Fade bottom delay={200} cascade>
              <HeadingText>{data.title}</HeadingText>
              <BodyText>{data.description}</BodyText>
              <ServicesWrapper>
                <Fade bottom cascade delay={100}>
                <H2Services>Services</H2Services>
                <ul>
                  {
                  data.services.map(service =>
                    <ListItem key={service}>{service}</ListItem>
                  )
                  }
                </ul>
                </Fade>
              </ServicesWrapper>
            </Fade>
            <PortfolioLink/>
         </LeftWrapper>
       )
      }
   </>
  )
}

export default MainContent
