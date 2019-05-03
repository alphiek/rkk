import React from 'react'
import Link from 'gatsby-plugin-transition-link'
import styled from 'styled-components'
import { color, font, weight, spacing } from '../Global/variables'
import { BlueContainerAnim, RedContainerAnim, PageContainer } from './Containers'
import LampAnim from './LampAnim'
import MouseAnim from './MouseAnim'
import Plant from './Plant'
import Title from './Title'


const LandingLink = styled(Link)`
  position: absolute;
  z-index: 3;
  text-transform: uppercase;
  border: 0.2em solid ${color.secondary};
  padding: 0.4em 0.9em;
  font-family: ${font.heebo};
  color: ${color.primary};
  font-size: 0.6em;
  letter-spacing: ${spacing.wide};
  font-weight: ${weight.extraBold};
`

const Portfolio = styled(LandingLink)`
  top: 21vh;
  right: 23vw;
`

const Services = styled(LandingLink)`
  bottom: 15vh;
  left: 35vw;
`

const LandingComponent = () => (

  <PageContainer>
    <Title />
    <LampAnim />
    <BlueContainerAnim>
      <MouseAnim />
    </BlueContainerAnim>
    <RedContainerAnim>
      <Plant />
    </RedContainerAnim>
    <Portfolio
      exit={{ length: 0.5 }}
      entry={{ delay: 0.8 }}
      to='/PortfolioPage'
      partiallyActive={true}
      >Portfolio
    </Portfolio>
    <Services
      exit={{ length: 0.5 }}
      entry={{ delay: 0.8 }}
      to='/WebDesignPage'
      partiallyActive={true}
      >Services
    </Services>
  </PageContainer>
)

export default LandingComponent
