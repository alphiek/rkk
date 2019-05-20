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
@@ -15,9 +14,7 @@ const GIF = styled.img`
const Video = () => {
  return (
    <RightWrapper>
  )
}

export default Video
