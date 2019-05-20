import React from 'react'
import Fade from 'react-reveal/Fade'
import data from './data'
import { seoData } from '../Copy/copy'
import PortfolioLink from '../Global/PortfolioLink'
import { HeadingText, Divider, Spacer } from '../Global/Shared'
import { H2Services, ListItem, BodyText } from '../Global/textSizes'
import { LeftWrapper } from '../Global/ServiceFlexWrapper'

const MainContent = () => {
  const services = data.map(item => <ListItem key={item.key}>{item.name}</ListItem>)
  return (
    <>
    {
      seoData.map(seo =>
        <LeftWrapper key='seo'>
          <Fade bottom cascade>
            <HeadingText>{seo.title}</HeadingText>
          </Fade>
          <Fade bottom cascade>
            <BodyText>{seo.description}</BodyText>
            <H2Services>Services</H2Services>
            <ul>
            {services}
            </ul>
          </Fade>
          <Spacer />
          <Fade delay={600}>
          <Divider />
          </Fade>
          <PortfolioLink />
        </LeftWrapper>
      )
    }
    </>
  )
}

export default MainContent
