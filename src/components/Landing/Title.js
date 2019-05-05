import React from 'react'
import styled from 'styled-components'
import { color, font, weight, spacing } from '../Global/variables'
import Fade from 'react-reveal/Fade'

const TitleWrapper = styled.div`
  position: absolute;
  height: auto;
  width: 40vw;
  margin-top: 38.5vh;
  margin-left: 22vw;
  padding: 1em;
  background-color: ${color.white};
  z-index: 3;
  overflow: hidden;

  @media only screen and (min-width: 824px) and (max-width: 1024px) {
    margin-top: 28vh;
    margin-left: 14vw;
    width: 60vw;
    background-color: transparent;
  }
  @media only screen
    and (max-width: 824px) {
      margin-top: 15vh;
      margin-left: 15vw;
      width: 80vw;
      background-color: transparent;
  }
  @media only screen
    and (max-width: 760px)
    and (orientation: portrait) {
      margin-left: 6vw;
    }
`
const TitleText = styled.h1`
  width: 90%;
  line-height: 105%;
  margin-top: 0.5em;
  color: ${color.primary};
  font-family: ${font.muli};
  font-weight: ${weight.extraBold};
  font-size: 2.2em;
  letter-spacing: ${spacing.narrow};

  @media only screen
      and (min-width: 824px)
      and (max-width: 1024px) {
        font-size: 2.5em;
  }
  @media only screen
  and (max-height: 1024px)
  and (min-height:1000px)
  and (max-width: 768px)
  and (min-width: 700px)
      and (orientation: portrait) {
        font-size: 2.5em;
        width: 70%;
      }
  @media only screen
      and (max-width: 824px)
      and (orientation: portrait) {
        font-size:1.9em;
  }
  @media only screen
      and (min-width: 961px)
      and (max-width: 1024px)
      and (orientation: landscape) {
        font-size:3.2em;
        margin-top:-0.5em;
  }
  @media only screen
      and (min-width: 824px)
      and (max-width: 960px)
      and (orientation: landscape) {
        font-size: 2.5em;
        width: 70%;
      }
  @media only screen
      and (min-width: 481px)
      and (max-width: 823px)
      and (orientation: landscape) {
        font-size: 2em;
      }
  @media only screen
      and (max-width: 480px)
      and (max-height: 360px)
      and (orientation: landscape) {
        font-size:1.5em;
        width:70%;
      }


`

const Location = styled.h2`
  margin-top: 0.9em;
  line-height: 100%;
  font-family: ${font.heebo};
  font-weight: ${weight.bold};
  letter-spacing: ${spacing.wide};
  color: ${color.secondary};
  text-transform: uppercase;
  font-size: 0.6em;

  @media (min-width: 824px) and (max-width: 1024px) {
    font-size: 0.7em;
  }

  @media only screen
      and (max-width: 824px)
      and (orientation: portrait) {
        font-size:0.7em;
        letter-spacing:0.28em;
        margin-left:0.15em;
        margin-top:1.4em;
  }
  @media only screen
      and (max-height: 1024px)
      and (min-height:1000px)
      and (max-width: 768px)
      and (min-width: 700px)
      and (orientation: portrait) {
        font-size: 0.8em;
        letter-spacing: 0.21em;
      }
  @media only screen
      and (min-width: 961px)
      and (max-width: 1024px)
      and (orientation: landscape) {
        font-size: 0.9em;
        letter-spacing: 0.5em;
        margin-left: 0.25em;
      }
  @media only screen
      and (min-width: 824px)
      and (max-width: 960px)
      and (orientation: landscape) {
        font-size: 1.05em;
        width: 70%;
      }
  @media only screen
      and (min-width: 481px)
      and (max-width: 823px)
      and (orientation: landscape) {
        font-size: 0.6em;
        letter-spacing:0.3em;
        width: 70%;
      }
`


const Title = () => {
  return (
    <div>
    <TitleWrapper>
     <Fade bottom cascade>
      <TitleText>Freelance Web Design & Development</TitleText>
      </Fade>
      <Fade delay={500} right cascade>
      <Location>------- Paphos -------</Location>
      </Fade>

    </TitleWrapper>
    </div>
  )
}

export default Title
