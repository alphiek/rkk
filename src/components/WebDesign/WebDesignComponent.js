import React from 'react'
import { PageWrapperCenter, TextWrapper, HeadingText, BodyText } from '../Global/Shared'
import ImageDeck from './ImageDeck'
import Fade from 'react-reveal/Fade'
import NumberNav from '../Global/Numbers'
import PortfolioLink from '../Global/PortfolioLink'
import BottomNav from '../Global/BottomNav'
import { TransWrap } from '../Global/TransWrap'

const WebDesignComponent = () => {
  return (
    <TransWrap>
    <PageWrapperCenter>
      <NumberNav />
      <ImageDeck />
      <TextWrapper>
      <Fade top >
        <HeadingText>Web Design</HeadingText>
      </Fade>
      <Fade top cascade>
        <BodyText>
          We are devoted to creating experiences that advocate clean, modern design principles. We carefully analyse the needs of our
          customers to craft high performing websites that support brand direction, accessibility and usability.
          Whether web application, website or CMS our designs are perfectly responsive and bespoke to our clients requirements.
        </BodyText>
        <PortfolioLink />
      </Fade>
      </TextWrapper>
      <BottomNav />
    </PageWrapperCenter>
    </TransWrap>
  )
}


export default WebDesignComponent
