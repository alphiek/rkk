import React from 'react'
import { PageWrapperCenter, FullWidthWrapper, HeadingText, BodyText } from '../Global/Shared'
import NumberNav from '../Global/Numbers'
import PortfolioLink from '../Global/PortfolioLink'
import BottomNav from '../Global/BottomNav'
import Carousel from './Carousel'
import { TransWrap } from '../Global/TransWrap'

const WebGraphicsComponent = () => {
  return (
    <TransWrap>
    <PageWrapperCenter>
     <NumberNav />
      <FullWidthWrapper>
      <Carousel />
        <HeadingText>Web Graphics</HeadingText>
          <BodyText>
          Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it?
          Do you see a little Asian child with a blank expression on his face sitting outside
          on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store.
          And you must think you're in a toy store, because you're here shopping for an infant named Jeb.
          </BodyText>
          <PortfolioLink />
      </FullWidthWrapper>
      <BottomNav />
    </PageWrapperCenter >
  </TransWrap>
  )
}

export default WebGraphicsComponent
