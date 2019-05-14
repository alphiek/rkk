import React from 'react'
import { BodyText, HeadingText, Services, ServiceList } from '../Global/Shared'
import { ServiceFlexWrapper, LeftWrapper, RightWrapper } from '../Global/ServiceFlexWrapper'
import { color, font, weight, spacing } from '../Global/variables'
import styled from 'styled-components'
import ImageDeck from './ImageDeck'
import Fade from 'react-reveal/Fade'
import PortfolioLink from '../Global/PortfolioLink'
import PropTypes from 'prop-types'
import { webdesignData } from '../Copy/copy'

const WebDesignComponent = ({ tablet }) => {
  return (
    <ServiceFlexWrapper tablet={tablet}>
    {
      webdesignData.map(data =>
        <LeftWrapper key={data.key}>
          <Fade bottom cascade>
            <HeadingText>{data.title}</HeadingText>
          </Fade>
          <Fade bottom cascade>
            <BodyText>{data.description}</BodyText>
            <Services>Services</Services>
            <div style={{ marginBottom: '0.8em'}}>
            {
              data.services.map(service =>
              <ServiceList key={service}>{service}</ServiceList>
            )
            }
            </div>
            <PortfolioLink/>
          </Fade>
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
