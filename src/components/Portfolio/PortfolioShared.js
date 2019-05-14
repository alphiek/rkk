import styled from 'styled-components'
import { color, font, weight, spacing } from '../Global/variables'
import {FullWidthWrapper } from '../Global/Shared'
import { PageWrapper } from '../Global/ServiceFlexWrapper'
import { PosedWrapper } from './PortfolioPosedShared'
import Img from 'gatsby-image'

export const MainImage = styled(Img)`
  position: relative;
  width: 37vw;
  box-shadow: 21px 21px 24px -10px rgba(0,0,0,.27);
`

export const TopImage = styled(MainImage)`
  z-index: 5;
  width: 11vw;
  margin-top: 0.7em;
  margin-left: -2em;
`
export const Flex = styled.div`
   display: flex;
   height: 50%;
   align-items: center;
   justify-content: center;
   margin-top: 3em;
   margin-left: -2em;
`
export const PageIndicator = styled.p`
   font-size: 15em;
   color: ${color.secondary};
   letter-spacing: ${spacing.narrow};
`

export const InfoFlex = styled.div`
  display: flex;
  position: relative;
  justify-content: space-around;
  padding-top: 1em;
  align-items: flex-end;
`
export const InfoFlexChild = styled.div`
  width: 50%;
`
export const ServiceFlexChild = styled.div`
  width: 15%;

`
export const Link = styled.p`
  padding-top: 1em;
  line-height: 100%;
  font-family: ${font.heebo};
  font-weight: ${weight.bold};
  letter-spacing: ${spacing.wide};
  color: ${color.primary};
  text-transform: uppercase;
  font-size: 0.45em;
  @media only screen
    and (max-width: 1024px) {
      font-size: 0.8em;
  }
  @media only screen
    and ( max-width: 824px)
    and (max-height: 824px) {
      font-size: 0.65em;
      padding: 2em 0 1em 0;
    }
  @media only screen
    and (max-width: 824px)
    and (orientation: landscape) {
      font-size: 0.6em;
    }
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
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  padding-bottom: 3em;
`

export const DevTag = styled.p`
  margin-bottom: 0.2em;
  text-transform: uppercase;
  color: ${color.grey};
  font-size: 0.67em;
`

export const Wrapper = styled(PosedWrapper)`
 position: relative;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 width: 100%;
 height: 100%;
`

export const ServiceWrapper = styled.div`
  width: 80%;
`
