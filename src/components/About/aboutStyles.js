import styled from 'styled-components'
import { color, font, weight, spacing } from '../Global/variables'

export const PageWrapper = styled.div`
  width: 31%;
  border-right: 0.3em solid ${color.secondary};
  @media only screen and (max-width: 1024px){
    width: 100%;
  }
`
export const AboutWrapper = styled.div`
  border: 0.3em solid ${color.white};
  height: 22em;
  margin-left: 1.5em;
  margin-right: 1.5em;
  padding: 1.8em;
  overflow: hidden;
`
export const AboutTitle = styled.h2`
  font-size: 1.8em;
  color: ${color.secondary};
  font-family: ${font.muli};
  font-weight: ${weight.extraBold};
  letter-spacing: ${spacing.narrow};
`
export const AboutText = styled.p`
  margin-top: 2em;
  font-size: 0.65em;
  color: ${color.white};
  font-weight: ${weight.light};
  line-height: 130%;
`
export const Copyright = styled.p`
  font-weight: ${weight.light};
  position: absolute;
  bottom: 4em;
  margin-left: 4em;
  font-size: 0.5em;
  color: ${color.white};
`
