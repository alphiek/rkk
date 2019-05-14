import React from 'react'
import { BodyText, HeadingText, Services, ServiceList } from '../Global/Shared'
import { ServiceFlexWrapper, LeftWrapper, RightWrapper } from '../Global/ServiceFlexWrapper'
import ImageDeck from './ImageDeck'
import Fade from 'react-reveal/Fade'
import PortfolioLink from '../Global/PortfolioLink'
import PropTypes from 'prop-types'
import { webdesignData } from '../Copy/copy'

const WebDesignComponent = ({tablet}) => {
  return (
    <ServiceFlexWrapper tablet={tablet}>
    {
      webdesignData.map(data =>
        <LeftWrapper key={data.key}>
              <Fade bottom delay={200}>
              <HeadingText>{data.title}</HeadingText>

              <BodyText>{data.description}</BodyText>

              <div style={{ marginBottom: '0.8em'}}>
              <Services>Services</Services>
              {
              data.services.map(service =>
              <ServiceList key={service}>{service}</ServiceList>
              )
              }
              </div>
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

WebDesignComponent.propTypes = {
  tablet: PropTypes.bool.isRequired
}
