import React from 'react'
import styled from 'styled-components'
import { H1, H2Heebo } from '../Global/textSizes'
import Fade from 'react-reveal/Fade'

export const TitleWrapper = styled.div`
  position: absolute;
  height: auto;
  width: 40vw;
  margin-top: 38.5vh;
  margin-left: 22vw;
  padding: 1em;
  background-color: #FFFFFF;
  z-index: 3;
  overflow: hidden;


  @media only screen and (max-width: 1024px) {
    margin-top: 25vh;
    margin-left: 14vw;
    width: 45vw;
    background-color: transparent;
  }

  @media only screen and (max-width: 824px) {
    margin-left: 4vw;
    width: 55vw;
  }

  @media only screen and (max-width: 520px) {
    width: 70vw;
  }

  @media only screen and (max-height: 411px) and (orientation: landscape) {
    width: 60vw;
    margin-left: 10vw;
    margin-top:20vh
  }
`
export const TitleText = styled(H1)`
  width: 90%;
  margin-top: 0.5em;
`

export const Location = styled(H2Heebo)`
  margin-top: 1.2em;
`

const Title = () => {
  return (
    <>
      <TitleWrapper>
        <Fade bottom cascade>
          <TitleText>Freelance Web Design&#160;& Development</TitleText>
        </Fade>
        <Fade delay={500} right cascade>
          <Location>------- Paphos -------</Location>
        </Fade>
      </TitleWrapper>
    </>
  )
}

export default Title
