import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { weight, spacing } from '../Global/variables'

const Wrapper = styled.div`
  position: relative;
`
const InfoWrapper = styled.div`
  padding: 1em;
  position: absolute;
  font-size: 0.9em;
  font-weight: ${weight.bold};
  letter-spacing: ${spacing.standard};
  z-index: 5;
  width: 100%;
  height: 100%;
  color: 	#f9f9f9;
  background: -moz-linear-gradient(-45deg, rgba(7,7,7,0.5) 1%, rgba(7,7,7,0) 50%, rgba(7,7,7,0) 100%);
  background: -webkit-linear-gradient(-45deg, rgba(7,7,7,0.5) 1%,rgba(7,7,7,0) 50%,rgba(7,7,7,0) 100%);
  background: linear-gradient(135deg, rgba(7,7,7,0.5) 1%,rgba(7,7,7,0) 50%,rgba(7,7,7,0) 100%);
`
const Line = styled.hr`
  width: 2em;
  margin-top: 0.2em;
`

const SubText = styled.span`
  text-transform: uppercase;
  font-size: 0.6em;
  letter-spacing: ${spacing.large};
`

export const FodeThumbnail = ({ thumb, onClickToggle }) => {
  return (
    <Wrapper>
      <InfoWrapper id='fode' onClick={onClickToggle}>
        House of FODE
        <Line />
        <SubText>Ecommerce</SubText>
      </InfoWrapper>
      <Img fluid={thumb} />
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
      <Img fluid={thumb} />
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
      <Img fluid={thumb} />
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
      <Img fluid={thumb} />
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
      <Img fluid={thumb} />
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
      <Img fluid={thumb} />
    </Wrapper>
  )
}
