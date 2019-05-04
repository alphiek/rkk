import styled from 'styled-components'
import { color, font, weight, spacing, boxShadow } from './variables'
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
export const PortfolioPageWrapper = styled(PageWrapper)`
  justify-content: flex-start;
  width: 84%;
  height: auto;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
  padding-bottom: 3em;
`

export const PageWrapperCenter = styled(PageWrapper)`
  align-items: center;
`

export const PageWrapperStack = styled(PageWrapperCenter)`
  
`
export const TextWrapper = styled.div`
  margin-left: 12%;
  width: 30%;
`

export const FullWidthWrapper = styled.div`
  width: 84%;
  margin-left: 8%;
`
export const PortfolioWrapper = styled(FullWidthWrapper)`
  margin-top: 8%;
  width: 100%;
  margin-right: 0;
  margin-left: 0;
  margin-bottom: 0;
  height: 7em;
`

export const ImgFull = styled(Img)`
  width: 100%;
  display: block;
  margin: 0 auto;
`

export const Thumbnail = styled.div`
  -webkit-box-shadow: ${boxShadow.shadow};
  -moz-box-shadow: ${boxShadow.shadow};
   box-shadow: ${boxShadow.shadow};
  padding: 3em;
  &:hover {
    transform: scale(1.05);
    transition: transform 1s;
  }
}
`
