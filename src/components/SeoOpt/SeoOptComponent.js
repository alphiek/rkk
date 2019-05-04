import React from 'react'
import { PageWrapperStack, TextWrapper, HeadingText, BodyText } from '../Global/Shared'
import NumberNav from '../Global/Numbers'
import PortfolioLink from '../Global/PortfolioLink'
import BottomNav from '../Global/BottomNav'
import SeoImage from './SeoImage'
import { TransWrap } from '../Global/TransWrap'
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
    <TransWrap>
    <PageWrapperStack>
      <NumberNav />
      <TextWrapper>
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
      </TextWrapper>
      <SeoImage />
      <BottomNav />
    </PageWrapperStack>
    </TransWrap>
  )
}


export default SeoOptComponent
