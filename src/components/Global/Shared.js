import styled from 'styled-components'
import { color, font, weight, spacing } from './variables'

export const HeadingText = styled.h1`
  border-left: 0.15em solid ${color.secondary};
  padding-left: 0.2em;
  margin-bottom: 0.5em;
  line-height: 105%;
  color: ${color.primary};
  font-family: ${font.muli};
  font-weight: ${weight.black};
  font-size: calc(1.4em + 1vw);
  letter-spacing: ${spacing.narrow};
@media only screen
    and (max-width: 1024px) {
      margin-bottom: 0.9em;
    }
`

export const Services = styled.h2`
  margin-top: 1em;
  margin-bottom: 1em;
  font-style: italic;
  color: ${color.primary};
  font-size: 0.6em;
  letter-spacing: ${spacing.large};
  font-family: ${font.libre};
  @media only screen
      and (max-width: 1024px) {
        font-size: 0.9em;
      }
`

export const ServiceList = styled.li`
  color: ${color.darkLink};
  font-family: ${font.muli};
  font-weight: ${weight.black};
  font-size: 0.45em;
  letter-spacing: ${spacing.large};
  text-transform: uppercase;
  line-height: 130%;
  padding: 0.3em;
  list-style: none;
  @media only screen
      and (max-width: 1024px) {
        font-size: 0.7em;
        padding: 0.5em;
      }
`

export const BodyText = styled.p`
  line-height: 135%;
  padding-bottom: 1em;
  color: ${color.body};
  font-weight: ${weight.normal};
  font-size: 0.6em;
  letter-spacing: ${spacing.small};
@media only screen
    and (max-width: 1024px){
      font-size: 0.8em;
      letter-spacing: 0em;
    }
`
export const FullWidthWrapper = styled.div`
  width: 84%;
  margin-left: 8%;
`
