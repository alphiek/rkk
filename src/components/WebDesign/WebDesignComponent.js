import React from 'react'
import { BodyText, HeadingText } from '../Global/Shared'
import { ServiceFlexWrapper, LeftWrapper, RightWrapper } from '../Global/ServiceFlexWrapper'
import ImageDeck from './ImageDeck'
import Fade from 'react-reveal/Fade'
import PortfolioLink from '../Global/PortfolioLink'
import PropTypes from 'prop-types'


const WebDesignComponent = ({tablet}) => {
  return (
    <ServiceFlexWrapper tablet={tablet}>
      <LeftWrapper>
        <Fade top >
          <HeadingText>Web Design</HeadingText>
        </Fade>
        <Fade top cascade>
          <BodyText>
            We are devoted to creating experiences that advocate clean, modern design principles. We carefully analyse the needs of our
            customers to craft high performing websites that support brand direction, accessibility and usability.
            Whether web application, website or CMS our designs are perfectly responsive and bespoke to our clients requirements.
          </BodyText>
          <PortfolioLink />
        </Fade>
      </LeftWrapper>
      <RightWrapper>
        <ImageDeck />
      </RightWrapper>
    </ServiceFlexWrapper>
  )
}


export default WebDesignComponent

WebDesignComponent.propTypes = {
  tablet: PropTypes.bool.isRequired
}
