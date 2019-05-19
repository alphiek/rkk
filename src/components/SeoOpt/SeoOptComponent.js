import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import data from './data'
import { seoData } from '../Copy/copy'
import PortfolioLink from '../Global/PortfolioLink'
import SeoImage from './SeoImage'
import { HeadingText, Divider, Spacer } from '../Global/Shared'
import { H2Services, ListItem, BodyText } from '../Global/textSizes'
import { ServiceFlexWrapper, LeftWrapper, RightWrapper } from '../Global/ServiceFlexWrapper'


const SeoOptComponent = () => {
  const services = data.map(item => <ListItem key={item.key}>{item.name}</ListItem>)
  return (
    <ServiceFlexWrapper>
      {
        seoData.map(seo =>
          <LeftWrapper key='seo'>
            <Fade bottom cascade>
              <HeadingText>{seo.title}</HeadingText>
            </Fade>
            <Fade bottom cascade delay={200}>
              <BodyText>{seo.description}</BodyText>
              <H2Services>Services</H2Services>
              <ul>
              {services}
              </ul>
            </Fade>
            <Spacer />
            <Divider />
            <PortfolioLink />
          </LeftWrapper>
        )
      }
      <RightWrapper>
      <SeoImage />
      </RightWrapper>
    </ServiceFlexWrapper>
  )
}

export default SeoOptComponent
