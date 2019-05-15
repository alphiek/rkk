import React from 'react'
import { HeadingText } from '../Global/Shared'
import { BodyText } from '../Global/textSizes.js'
import { ServiceFlexWrapper, LeftWrapper, RightWrapper } from '../Global/ServiceFlexWrapper'
import PortfolioLink from '../Global/PortfolioLink'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { devData } from '../Copy/copy'
import gif from '../../images/GIF/rkkMock.gif'

const GIF = styled.img`
  width: 35em;
`

const DevComponent = ({ tablet }) => {
  return (
    <ServiceFlexWrapper tablet={tablet}>
    {
      devData.map(data =>
          <LeftWrapper key={data.key}>
            <Fade bottom delay={200} opposite={true}>
              <HeadingText>{data.title}</HeadingText>
            </Fade>
            <Fade bottom cascade delay={200}>
              <BodyText>{data.description}</BodyText>
              <BodyText>{data.descriptionTwo}</BodyText>
            </Fade>
            <PortfolioLink />
          </LeftWrapper>
      )
    }
      <RightWrapper>
       <GIF src={gif} alt='Laptop with moving code and site preview' />
      </RightWrapper>
    </ServiceFlexWrapper>
  )
}

export default DevComponent

DevComponent.propTypes = {
  tablet: PropTypes.bool.isRequired
}
