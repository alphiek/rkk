import styled from 'styled-components'
import { color, spacing } from '../Global/variables'
import {FullWidthWrapper } from '../Global/Shared'
import { PageWrapper } from '../Global/ServiceFlexWrapper'
import Img from 'gatsby-image'

export const MainImage = styled(Img)`
  position: relative;
  width: 35vw;
  box-shadow: 21px 21px 24px -10px rgba(0,0,0,.27);
  @media only screen and (max-width: 1024px) {
   width: 43vw;
  }
  @media only screen and (max-width: 570px){
   width: 50vw;
  }
`

export const TopImage = styled(MainImage)`
  z-index: 5;
  width: 10vw;
  margin-top: 0.7em;
  margin-left: -2em;
  @media only screen and (max-width: 1024px) {
   width: 12vw;
  }
  @media only screen and (max-width: 570px){
   width: 18vw;
   margin-top: 3em;
   margin-left: -3.5em;
  }
`
export const Flex = styled.div`
   display: flex;
   height: 50%;
   margin-top: 1em;
   align-items: center;
   justify-content: center;
   margin-left: -2em;
`
export const PageIndicator = styled.p`
   font-size: 14em;
   color: ${color.secondary};
   letter-spacing: ${spacing.narrow};
   @media only screen and (max-width: 570px){
     font-size: 8em;
   }
`

export const InfoFlex = styled.div`
  display: flex;
  position: relative;
  justify-content: space-around;
  padding-top: 1em;
  align-items: flex-end;
  @media only screen and (max-width: 1024px) {
   flex-wrap: wrap;
   justify-content: flex-start;
   align-items: flex-start;
  }
`
export const InfoFlexChild = styled.div`
  width: 50%;
  @media only screen and (max-width: 1024px) {
   width: 100%;
  }
`
export const ServiceFlexChild = styled.div`
  width: 15%;
  @media only screen and (max-width: 1024px) {
   width: 30%;
   padding-left: 3em;
   margin-top: 1em;
  }
  @media only screen and (max-width: 824px) {
   width: 45%;
   padding-left: 3em;
   margin-top: 1em;
  }
  @media only screen and (max-width: 700px) {
   width: 45%;
   padding-bottom: 2em;
  }
  @media only screen and (max-width: 570px) {
   width: 100%;
   padding-bottom: 1em;
   padding-left: 1em;
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
  justify-content: center;
  width: 84%;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  padding-bottom: 3em;
  @media only screen and (max-width: 1024px) {
   margin-top: 3em;
   justify-content: flex-start;
   align-items: flex-start;
   padding-bottom: 15em;
  }
`

export const DevTag = styled.p`
  margin-bottom: 0.2em;
  line-height: 2em;
  vertical-align: bottom;
  text-transform: uppercase;
  color: ${color.grey};
  font-size: calc(0.5em + 0.2vw);
  @media only screen and (max-width: 1024px) {
    font-size: calc(0.5em + 0.6vw);
  }
  @media only screen and (max-width: 824px) {
    font-size: calc(0.5em + 1vw);
    margin-bottom: 0.5em;
  }
  @media only screen and (max-width: 570px) {
    font-size: calc(0.5em + 2vw);
    margin-bottom: 0.5em;
  }
`
export const SiteTag = styled.a`
  margin-bottom: 0.2em;
  line-height: 2em;
  vertical-align: bottom;
  text-transform: uppercase;
  color: ${color.grey};
  font-size: calc(0.5em + 0.2vw);
  @media only screen and (max-width: 1024px) {
    font-size: calc(0.5em + 0.6vw);
  }
  @media only screen and (max-width: 824px) {
    font-size: calc(0.5em + 1vw);
    margin-bottom: 0.5em;
  }
  @media only screen and (max-width: 570px) {
    font-size: calc(0.5em + 2vw);
    margin-bottom: 0.5em;
  }
`

export const Wrapper = styled.div`
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
