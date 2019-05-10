import React from 'react'
import styled from 'styled-components'
import { color, font, weight, spacing } from '../Global/variables'
import Fade from 'react-reveal/Fade'

export const TitleWrapper = styled.div`
  position: absolute;
  height: auto;
  width: 40vw;
  margin-top: 38.5vh;
  margin-left: 22vw;
  padding: 1em;
  background-color: ${color.white};
  z-index: 3;
  overflow: hidden;

  @media only screen
      and (max-width: 1024px) {
        margin-top: 25vh;
        margin-left: 14vw;
        width: 45vw;
        background-color: transparent;
  }
  @media only screen
      and (max-width: 824px) {
        margin-left: 4vw;
        width: 50vw;
      }
  @media only screen
      and (max-width: 500px) {
        width: 70vw;
      }

  @media only screen
      and (max-height: 411px)
      and (orientation: landscape) {
        width: 60vw;
        margin-left: 10vw;
        margin-top:20vh
      }

`
export const TitleText = styled.h1`
  width: 90%;
  line-height: 105%;
  margin-top: 0.5em;
  font-size: calc(1.4em + 1vw);
  color: ${color.primary};
  font-family: ${font.muli};
  font-weight: ${weight.black};
  letter-spacing: ${spacing.narrow};
  @media only screen
      and (max-height: 411px)
      and (orientation: landscape) {
        font-size: 1.8em;
      }
`

export const Location = styled.h2`
  margin-top: 0.9em;
  line-height: 100%;
  font-family: ${font.heebo};
  font-weight: ${weight.bold};
  letter-spacing: ${spacing.wide};
  color: ${color.secondary};
  text-transform: uppercase;
  font-size: 0.6em;
  @media only screen
      and (max-width: 600px) {
          font-size: calc(0.33em + 1vw);
      }
  @media only screen
      and (max-width: 1024px) {
          font-size: 0.6em;
      }
  @media only screen
      and (max-height: 411px)
      and (orientation: landscape) {
        font-size: 0.75em;
      }
`


const Title = () => {
  return (
    <div>
      <TitleWrapper>
        <Fade bottom cascade>
          <TitleText>Freelance Web Design&#160;& Development</TitleText>
        </Fade>
        <Fade delay={500} right cascade>
          <Location>------- Paphos -------</Location>
        </Fade>
      </TitleWrapper>
    </div>
  )
}

export default Title
