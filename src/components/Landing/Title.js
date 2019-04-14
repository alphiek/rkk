import React from 'react'
import styled from 'styled-components'
import { color, font, weight } from '../Global/variables'

const TitleWrapper = styled(posed.div)`
  position: absolute;
  height: auto;
  width: 40vw;
  margin-top: 38.5vh;
  margin-left: 22vw;
  padding: 1em;
  background-color: ${color.white};
  z-index: 3;
  overflow: hidden;
`
const TitleText = styled(posed.h1)`
  width: 90%;
  line-height: 105%;
  margin-top: 0.5em;
  color: ${color.primary};
  font-family: ${font.muli};
  font-weight: ${weight.extraBold};
  font-size: 2.2em;
  letter-spacing: -0.05em;
`

const Location = styled(posed.h2)`
  margin-top: 0.9em;
  line-height: 100%;
  font-family: ${font.heebo};
  font-weight: ${weight.bold};
  letter-spacing: 0.2em;
  color: ${color.secondary};
  text-transform: uppercase;
  font-size: 0.6em;
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
