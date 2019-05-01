import styled from 'styled-components'
import { color, font, weight, spacing } from './variables'
import Img from 'gatsby-image'

export const HeadingText = styled.h1`
  border-left: 0.15em solid ${color.secondary};
  padding-left: 0.2em;
  margin-bottom: 0.5em;
  line-height: 105%;
  color: ${color.primary};
  font-family: ${font.muli};
  font-weight: ${weight.bold};
  font-size: 1.6em;
  letter-spacing: ${spacing.narrow};

  @media only screen (min-width: 824px) and (max-width: 1024px) {
    font-size: 2.5em;
  }
`
export const BodyText = styled.p`
  line-height: 135%;
  color: ${color.body};
  font-weight: ${weight.light};
  font-size: 0.65em;
  letter-spacing: ${spacing.small};
`

export const PageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`
export const PageWrapperCenter = styled(PageWrapper)`
  align-items: center;
`
export const TextWrapper = styled.div`
  margin-left: 12%;
  width: 30%;
`

export const FullWidthWrapper = styled.div`
  width: 80%;
  margin-left: 8%;
`
export const PortfolioWrapper = styled(FullWidthWrapper)`
  margin-top: 8%;
`

export const ImgFull = styled(Img)`
  width: 100%;
  display: block;
  margin: 0 auto;
`
