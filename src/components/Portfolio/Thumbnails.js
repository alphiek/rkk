import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { color, weight, spacing } from '../Global/variables'


const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
const InfoWrapper = styled.div`
  padding: 1em;
  position: absolute;
  font-size: calc(0.7em + 0.3vw);
  font-weight: ${weight.bold};
  letter-spacing: ${spacing.standard};
  z-index: 5;
  width: 100%;
  height: 100%;
  color: 	#f9f9f9;
  transition: 400ms;
  background: -moz-linear-gradient(-45deg, rgba(7,7,7,0.5) 1%, rgba(7,7,7,0) 50%, rgba(7,7,7,0) 100%);
  background: -webkit-linear-gradient(-45deg, rgba(7,7,7,0.5) 1%,rgba(7,7,7,0) 50%,rgba(7,7,7,0) 100%);
  background: linear-gradient(135deg, rgba(7,7,7,0.5) 1%,rgba(7,7,7,0) 50%,rgba(7,7,7,0) 100%);
  &: hover {
    background-color: ${color.thumbnail};
    color: ${color.secondary};
  }

  @media only screen and (max-width: 1024px) {
    margin-bottom: 0.5em;
    font-size: calc(0.7em + 0.6vw);
  }
  @media only screen and (max-width: 824px){
    font-size: calc(0.7em + 1.1vw);
  }

  @media only screen and (max-width: 570px){
    font-size: calc(0.7em + 2vw);
  }
`
const Line = styled.div`
  background-color: #f9f9f9;
  width: 2em;
  height: 0.1em;
  margin-top: 0.2em;
  transition: 400ms;
  ${InfoWrapper}:hover & {
    background-color: ${color.secondary};
  }
  @media only screen and (max-width: 824px){
    height: 0.15em;
    margin-top: 0.3em;
    margin-bottom: 0.1em;
  }
  @media only screen and (max-width: 570px){
    height: 0.2em;
    margin-top: 0.5em;
    margin-bottom: 0.3em;
  }
`

const SubText = styled.span`
  text-transform: uppercase;
  font-size: calc(0.45em + 0.3vw);;
  letter-spacing: ${spacing.large};
  @media only screen and (max-width: 1024px) {
    font-size: calc(0.45em + 0.3vw);
  }
  @media only screen and (max-width: 824px){
    font-size: calc(0.45em + 0.4vw);
  }

  @media only screen and (max-width: 570px){
    font-size: calc(0.45em + 1vw);
  }
`


export const FodeThumbnail = ({ thumb, onClickToggle }) => {
  return (
    <Wrapper>
      <InfoWrapper id='fode' onClick={onClickToggle}>
        House of FODE
        <Line />
        <SubText>Ecommerce</SubText>
      </InfoWrapper>
      <Img
        backgroundColor={true}
        fluid={thumb} />
    </Wrapper>
  )
}


export const LMLThumbnail = ({ thumb, onClickToggle }) => {
  return (
    <Wrapper>
      <InfoWrapper id='lml' onClick={onClickToggle}>
        Like-Minded Living
        <Line />
        <SubText>Property</SubText>
      </InfoWrapper>
      <Img
        backgroundColor={true}
        fluid={thumb} />
    </Wrapper>
  )
}

export const PPDThumbnail = ({ thumb, onClickToggle }) => {
  return (
    <Wrapper>
      <InfoWrapper id='ppd' onClick={onClickToggle}>
        Paphos Painter Decorators
        <Line />
        <SubText>Trades</SubText>
      </InfoWrapper>
      <Img
        backgroundColor={true}
        fluid={thumb} />
    </Wrapper>
  )
}

export const LKThumbnail = ({ thumb, onClickToggle }) => {
  return (
    <Wrapper>
      <InfoWrapper id='lk' onClick={onClickToggle}>
        Louise Kelly Salon
        <Line />
        <SubText>Beauty</SubText>
      </InfoWrapper>
      <Img
        backgroundColor={true}
        fluid={thumb} />
    </Wrapper>
  )
}

export const SCCThumbnail = ({ thumb, onClickToggle }) => {
  return (
    <Wrapper>
      <InfoWrapper id='scc' onClick={onClickToggle}>
        South Coast Coaches
        <Line />
        <SubText>Travel</SubText>
      </InfoWrapper>
      <Img
        backgroundColor={true}
        fluid={thumb} />
    </Wrapper>
  )
}

export const ForagerThumbnail = ({ thumb, onClickToggle }) => {
  return (
    <Wrapper>
      <InfoWrapper id='forager' onClick={onClickToggle}>
        Forager
        <Line />
        <SubText>Web Application</SubText>
      </InfoWrapper>
      <Img
        backgroundColor={true}
        fluid={thumb} />
    </Wrapper>
  )
}
