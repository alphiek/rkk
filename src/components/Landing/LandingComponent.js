import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { color, font, weight } from '../Global/variables'
import { BlueContainerAnim, RedContainerAnim } from './Containers'
import LampAnim from './LampAnim'
import MouseAnim from './MouseAnim'
import plant from '../../images/plant.svg'
import Title from './Title'


const Plant = styled.img`
  position: absolute;
  bottom: 0vh;
  right: 0vw;
  width: 18vw;
`

const PageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`

const Portfolio = styled(Link)`
  position: absolute;
  top: 21vh;
  right: 23vw;
  z-index: 3;
  text-transform: uppercase;
  border: 0.2em solid ${color.secondary};
  padding: 0.4em 0.9em;
  font-family: ${font.heebo};
  color: ${color.primary};
  font-size: 0.6em;
  letter-spacing: 0.2em;
  font-weight: ${weight.extraBold};
`

const Services = styled(Link)`
  position: absolute;
  bottom: 15vh;
  left: 35vw;
  z-index: 3;
  color: ${color.primary};
  font-size: 0.6em;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-family: ${font.heebo};
  border: 0.2em solid ${color.secondary};
  padding: 0.4em 0.9em;
  font-weight: ${weight.extraBold};
`

const LandingComponent = () => (

  <PageContainer>
    <Title />
    <LampAnim />
    <BlueContainerAnim>
      <MouseAnim />
    </BlueContainerAnim>
    <RedContainerAnim>
      <Plant src={plant} alt='Plant and Headphones' />
    </RedContainerAnim>
    <Portfolio
      to='/portfolio'
      partiallyActive={true}
      >Portfolio
    </Portfolio>
    <Services
      to='/services'
      partiallyActive={true}
      >Services
    </Services>
  </PageContainer>
)

export default LandingComponent
