import styled from 'styled-components'
import { color, font, weight, spacing } from './variables'
import {FullWidthWrapper, BodyText } from './Shared'
import { PageWrapper } from './ServiceFlexWrapper'
import { PosedWrapper } from './PortfolioPosedShared'


export const Services = styled.h3`
margin-top: 1em;
margin-bottom: 0.2em;
text-transform: uppercase;
color: ${color.grey};
font-size: 0.60em;
`
export const Built = styled.h4`
margin-top: 1em;
margin-bottom: 0.2em;
text-transform: uppercase;
color: ${color.grey};
font-size: 0.60em;
`
export const Line = styled.hr`
  width: 10%;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  height: 0.2em;
  background: ${color.secondary};
  border: none;
`
export const DevTag = styled.p`
  margin-bottom: 0.2em;
  text-transform: uppercase;
  color: ${color.grey};
  font-size: 0.67em;
`
export const Description = styled(BodyText)`
  margin-left: 1em;
  padding-top: 0.5em;
  font-size: 0.65em;
`

export const PortfolioWrapper = styled(FullWidthWrapper)`
  margin-top: 8%;
  width: 100%;
  margin-right: 0;
  margin-left: 0;
  margin-bottom: 0;
  height: 5em;
`

export const PortfolioPageWrapper = styled(PageWrapper)`
  justify-content: flex-start;
  width: 84%;
  height: auto;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
  padding-bottom: 3em;
`

export const Wrapper = styled(PosedWrapper)`
 position: relative;
 display: flex;
 align-items: center;
 justify-content: center;
 width: 100%;
 height: 100vh;
`

export const ListWrapper = styled.div`
  margin-left: 0.5em;
  padding: 0.5em;
  width: 80%;

`
export const ServiceWrapper = styled.div`
  padding: 0.5em;
  margin-left: 0.5em;
  width: 80%;
`
export const Title = styled.h2`
  border-bottom: 0.15em solid ${color.secondary};
  padding-bottom: 0.5em;
  margin-bottom: 0.5em;
  line-height: 105%;
  color: ${color.primary};
  font-family: ${font.muli};
  font-weight: ${weight.bold};
  font-size: 1.45em;
  letter-spacing: ${spacing.narrow};
  width: 10em;

  @media only screen (min-width: 824px) and (max-width: 1024px) {
    font-size: 2.5em;
  }
`
export const Tech = styled.p`
  line-height: 135%;
  padding-bottom: 0.5em;
  font-family: ${font.heebo};
  font-weight: ${weight.extraBold};
  letter-spacing: ${spacing.wide};
  color: ${color.grey};
  text-transform: uppercase;
  font-size: 0.4em;
  width: 100%;
  @media (min-width: 824px) and (max-width: 1024px) {
    font-size: 0.7em;
  }
`
