import React from 'react'
import { PageWrapperCenter, TextWrapper, HeadingText, BodyText } from '../Global/Shared'
import ImageDeck from './ImageDeck'
import Fade from 'react-reveal/Fade'
import NumberNav from '../Global/Numbers'
import PortfolioLink from '../Global/PortfolioLink'
import BottomNav from '../Global/BottomNav'

const WebDesignComponent = () => {
  return (
    <PageWrapperCenter>
      <NumberNav />
      <ImageDeck />
      <TextWrapper>
      <Fade top >
        <HeadingText>Web Design</HeadingText>
      </Fade>
      <Fade top cascade>
        <BodyText>
          Now that there is the Tec-9, a crappy spray gun from South Miami.
          This gun is advertised as the most popular gun in American crime.
          Do you believe that shit? It actually says that in the little book that comes with it:
          the most popular gun in American crime. Like they're actually proud of that shit.
        <PortfolioLink />
        </BodyText>
      </Fade>
      </TextWrapper>
      <BottomNav />
    </PageWrapperCenter>
  )
}


export default WebDesignComponent
