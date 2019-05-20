import React from 'react'
import gif from '../../images/GIF/rkkMock.gif'
import styled from 'styled-components'
import { RightWrapper } from '../Global/ServiceFlexWrapper'

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
     <GIF src={gif} alt='Laptop with moving code and site preview' />
    </RightWrapper>
  )
}

export default Video
