import React from 'react'
import gif from '../../images/GIF/rkkMock.gif'
import styled from 'styled-components'
import { RightWrapper } from '../Global/ServiceFlexWrapper'
import Fade from 'react-reveal/Fade'

const GIF = styled.img`
  width: 20em;
  margin-top: -2em;
  @media only screen and (max-width: 1024px) {
    margin-top: 0;
    margin-bottom: -2em;
  }
`
const Video = () => {
  return (
    <RightWrapper>
    <Fade right>
     <GIF src={gif} alt='Laptop with moving code and site preview' />
     </Fade>
    </RightWrapper>
  )
}

export default Video
