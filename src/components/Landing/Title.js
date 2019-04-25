import React from 'react'
import styled from 'styled-components'
import { color, font, weight, spacing } from '../Global/variables'

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

  @media only screen and (max-width: 824px) {
    margin-top: 15vh;
    margin-left: 8vw;
    width: 80vw;
    background-color: transparent;
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

  @media only screen (min-width: 824px) and (max-width: 1024px) {
    font-size: 2.5em;
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
`


const Title = () => {
  return (
    <div>
    <TitleWrapper>
      <TitleText>Freelance Web Design & Development</TitleText>
      <Location>------- Paphos -------</Location>
    </TitleWrapper>
    </div>
  )
}

export default Title
