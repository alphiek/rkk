import React from 'react'
import { HeadingText } from '../Global/Shared'
import { H2Services, ListItem, BodyText } from '../Global/textSizes'
import { ServiceFlexWrapper, LeftWrapper, RightWrapper } from '../Global/ServiceFlexWrapper'
import PortfolioLink from '../Global/PortfolioLink'
import SeoImage from './SeoImage'
import Fade from 'react-reveal/Fade'
import data from './data'
import { seoData } from '../Copy/copy'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Spacer = styled.div`
  height: 0.8em;
  @media only screen and (max-width: 1024px) {
    height: 2em;
  }
  @media only screen and (max-width: 824px){
    height: 2.5em;
  }

  @media only screen and (max-width: 570px){
    height: 3em;
  }
`



const SeoOptComponent = ({tablet}) => {
  const services = data.map(item => <ListItem key={item.key}>{item.name}</ListItem>)
  return (
    <ServiceFlexWrapper tablet={tablet}>
      {
        seoData.map(seo =>
          <LeftWrapper key='seo'>
            <Fade bottom >
              <HeadingText>{seo.title}</HeadingText>
            </Fade>
            <Fade right cascade>
              <BodyText>{seo.description}</BodyText>
              <H2Services>Services</H2Services>
              <ul>
              {services}
              </ul>
            </Fade>
            <Spacer />
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

SeoOptComponent.propTypes = {
  tablet: PropTypes.bool.isRequired
}
