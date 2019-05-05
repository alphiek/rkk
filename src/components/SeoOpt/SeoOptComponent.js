import React from 'react'
import { HeadingText, BodyText } from '../Global/Shared'
import { ServiceFlexWrapper, LeftWrapper, RightWrapper } from '../Global/ServiceFlexWrapper'
import PortfolioLink from '../Global/PortfolioLink'
import SeoImage from './SeoImage'
import Fade from 'react-reveal/Fade'
import data from './data'
import styled from 'styled-components'
import { color, weight, spacing } from '../Global/variables'
import Tick from './Tick'

const Service = styled.li`
  line-height: 135%;
  color: ${color.body};
  font-weight: ${weight.light};
  font-size: 0.55em;
  letter-spacing: ${spacing.small};
`
const ListFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0.2em;
`

const SeoOptComponent = () => {
  const services = data.map(item => <ListFlex key={item.key}><Tick/><Service>{item.name}</Service></ListFlex>)
  return (
    <ServiceFlexWrapper>
      <LeftWrapper>
        <Fade bottom delay={1000} opposite={true}>
          <HeadingText>SEO Optimisation</HeadingText>
        </Fade>
        <Fade right cascade delay={1000}>
          <BodyText>
            Boost your website's organic search results and search engine visability with our technical SEO services:
          </BodyText>
          <ul style={{ marginTop: '0.5em' }}>
          {services}
          </ul>
        </Fade>
        <PortfolioLink />
      </LeftWrapper>
      <RightWrapper>
      <SeoImage />
      </RightWrapper>
    </ServiceFlexWrapper>
  )
}


export default SeoOptComponent
