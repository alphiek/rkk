import React from 'react'
import { HeadingText, BodyText } from '../Global/Shared'
import { ServiceFlexWrapper, LeftWrapper, RightWrapper } from '../Global/ServiceFlexWrapper'
import PortfolioLink from '../Global/PortfolioLink'
import Skills from './Skills'
import DevTablet from './DevTablet'
import Fade from 'react-reveal/Fade'
import PropTypes from 'prop-types'

const DevComponent = ({tablet}) => {
  return (
    <ServiceFlexWrapper tablet={tablet}>
      <LeftWrapper>
        <Fade bottom delay={1000} opposite={true}>
          <HeadingText>Development</HeadingText>
        </Fade>
        <Fade bottom cascade delay={1000}>
          <BodyText>
            Our websites and web applications are developed with Gatsby and React providing progressive web app benefits as standard,
            which ensures that they are fast, lean and highly adaptable to enhance user experience and mobile load speed.
            <br/>
            <br />
            Through JAMstack methodology we have the capability to seamlessly connect to serverless backend technologies
            and headless CMS solutions to provide flexible content management and enhanced security.
            Popular CMS or Ecommerce providers such as Wordpress, Drupal, Shopify and Snipcart are fully intergratable,
            combining the power of these platforms with the speed and finese associated with React web applications.
          </BodyText>
          </Fade>
          <PortfolioLink />
      </LeftWrapper>
      <RightWrapper>
      {tablet ?
       <DevTablet />
       :
       <Skills />
      }
      </RightWrapper>
    </ServiceFlexWrapper>
  )
}

export default DevComponent

DevComponent.propTypes = {
  tablet: PropTypes.bool.isRequired
}
