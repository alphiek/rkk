import React from 'react'
import { HeadingText, BodyText, ServiceList, Services } from '../Global/Shared'
import { ServiceFlexWrapper, LeftWrapper, RightWrapper } from '../Global/ServiceFlexWrapper'
import PortfolioLink from '../Global/PortfolioLink'
import SeoImage from './SeoImage'
import Fade from 'react-reveal/Fade'
import data from './data'
import { seoData } from '../Copy/copy'
import PropTypes from 'prop-types'

const SeoOptComponent = ({tablet}) => {
  const services = data.map(item => <ServiceList>{item.name}</ServiceList>)
  return (
    <ServiceFlexWrapper tablet={tablet}>
      {
        seoData.map(seo =>
          <LeftWrapper>
            <Fade bottom delay={1000} opposite={true}>
              <HeadingText>{seo.title}</HeadingText>
            </Fade>
            <Fade right cascade delay={1000}>
              <BodyText>{seo.description}</BodyText>
              <Services>Services</Services>
              <ul style={{ marginBottom: '0.8em' }}>
              {services}
              </ul>
            </Fade>
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
