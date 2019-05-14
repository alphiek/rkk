import React from 'react'
import styled from 'styled-components'
import { MainLink } from '../Global/textSizes'
import { BlueContainerAnim, RedContainerAnim, PageContainer } from './Containers'
import LampAnim from './LampAnim'
import MouseAnim from './MouseAnim'
import Plant from './Plant'
import Title from './Title'
import Fade from 'react-reveal/Fade'

const LandingLink = styled(MainLink)`
  position: absolute;
  z-index: 3;
  padding: 0.6em 0.9em;
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
    <Fade delay={500} cascade>
      <Portfolio
        aria-label="Link to Portfolio"
        exit={{ length: 0.5 }}
        entry={{ delay: 0.8 }}
        to='/PortfolioPage'
        partiallyActive={true}
        >Portfolio
      </Portfolio>
    </Fade>
    <Fade delay={600} cascade>
      <Services
        aria-label="Link to Services"
        exit={{ length: 0.5 }}
        entry={{ delay: 0.8 }}
        to='/WebDesignPage'
        partiallyActive={true}
        >Services
      </Services>
    </Fade>
  </PageContainer>
)

export default LandingComponent
