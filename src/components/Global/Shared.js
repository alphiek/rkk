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
  font-size: 1.6em;
  letter-spacing: ${spacing.narrow};

  @media only screen
      and (min-width: 824px)
      and (max-width: 1024px) {
    font-size: 2.5em;
  }
`

export const Services = styled.h2`
  margin-top: 1em;
  margin-bottom: 1em;
  font-style: italic;
  color: ${color.grey};
  font-size: 0.55em;
  letter-spacing: ${spacing.large};
  font-family: ${font.libre};
`

export const ServiceList = styled.li`
  color: ${color.lightGrey};
  font-family: ${font.muli};
  font-weight: ${weight.black};
  font-size: 0.45em;
  letter-spacing: ${spacing.large};
  text-transform: uppercase;
  line-height: 130%;
  padding: 0.3em;
  list-style: none;
`

export const BodyText = styled.p`
  line-height: 135%;
  padding-bottom: 1em;
  color: ${color.body};
  font-weight: ${weight.light};
  font-size: 0.55em;
  letter-spacing: ${spacing.small};
@media only screen
    and (max-width: 1024px)
    and (min-width: 824px){
      font-size: 1em;
    }
@media only screen
    and (max-width: 823px) {
      font-size: 0.9em;
    }
@media only screen
    and (max-width: 823px)
    and (min-height: 1024px) {
      font-size:1.2em;
    }
@media only screen
    and (max-width: 824px)
    and (orientation: landscape) {
      font-size: 0.7em;    }
`
export const FullWidthWrapper = styled.div`
  width: 84%;
  margin-left: 8%;

@media only screen
    and (min-width: 375px)
    and (min-height: 811px)
    and (orientation: portrait) {
      margin-top: 0 !important;
    }
@media only screen
    and (max-width: 823px)
    and (orientation: portrait) {
      margin-top: 25%;
    }
@media only screen
    and (max-width: 823px)
    and (orientation: landscape){
      margin-top: 14em;
    }
`
