import styled from 'styled-components'
import { color, font, weight, spacing } from './variables'
import { BodyText } from './Shared'
import { PageWrapper } from './ServiceFlexWrapper'

export const PortfolioPageWrapper = styled(PageWrapper)`
  justify-content: flex-start;
  width: 84%;
  height: auto;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
  padding-bottom: 3em;
`

export const Wrapper = styled.div`
 position: relative;
 display: flex;
 width: 100%;
 height: 30%;
 margin-bottom: 5em;
 margin-top: 1em;
`
export const TextContainer = styled.div`
 width: 45%;
`
export const InfoFlex = styled.div`
 display: flex;
`
export const ListWrapper = styled.div`
  padding-top: 1.2em;
  padding-right: 1.2em;
  width: 10em;
`
export const ServiceWrapper = styled.div`
  padding-top: 1.2em;
  border-top: 0.2em solid ${color.secondary};
  width: 49%;
  margin-left: 2em;
`
export const Title = styled.h2`
  border-bottom: 0.15em solid ${color.secondary};
  padding: 0.3em;
  line-height: 105%;
  color: ${color.primary};
  font-family: ${font.muli};
  font-weight: ${weight.bold};
  font-size: 1.4em;
  letter-spacing: ${spacing.narrow};
  width: 10em;

  @media only screen (min-width: 824px) and (max-width: 1024px) {
    font-size: 2.5em;
  }
`
export const Tech = styled.p`
  text-align: right;
  line-height: 135%;
  padding-bottom: 0.5em;
  font-family: ${font.heebo};
  font-weight: ${weight.extraBold};
  letter-spacing: ${spacing.wide};
  color: ${color.lightGrey};
  text-transform: uppercase;
  font-size: 0.4em;
  width: 100%;
  @media (min-width: 824px) and (max-width: 1024px) {
    font-size: 0.7em;
  }
`
export const Description = styled(BodyText)`
  font-size: 0.6em;
  margin-right: 3em;
  border-left: 0.3em solid ${color.secondary};
  padding: 1.2em;
`
