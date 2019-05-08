import React from 'react'
import { HeadingText, BodyText } from '../Global/Shared'
import { ServiceFlexWrapper, LeftWrapper, RightWrapper } from '../Global/ServiceFlexWrapper'
import PortfolioLink from '../Global/PortfolioLink'
import Skills from './Skills'
import DevTablet from './DevTablet'
import Fade from 'react-reveal/Fade'
import PropTypes from 'prop-types'
import { devData } from '../Copy/copy'

const DevComponent = ({ tablet }) => {
  return (
    <ServiceFlexWrapper tablet={tablet}>
    {
      devData.map(data =>
          <LeftWrapper key={data.key}>
            <Fade bottom delay={1000} opposite={true}>
              <HeadingText>{data.title}</HeadingText>
            </Fade>
            <Fade bottom cascade delay={1000}>
              <BodyText>{data.description}</BodyText>
              <BodyText>{data.descriptionTwo}</BodyText>
            </Fade>
            <PortfolioLink />
          </LeftWrapper>
      )
    }
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
