import React from 'react'
import { PageWrapperCenter, TextWrapper, HeadingText, BodyText } from '../Global/Shared'
import NumberNav from '../Global/Numbers'
import PortfolioLink from '../Global/PortfolioLink'
import BottomNav from '../Global/BottomNav'
import Skills from './Skills'
import { TransWrap } from '../Global/TransWrap'

const DevComponent = () => {
  return (
    <TransWrap>
    <PageWrapperCenter>
      <NumberNav />
      <TextWrapper>
        <HeadingText>Development</HeadingText>
        <BodyText>
          Look, just because I don't be givin' no man a foot massage don't make it right
          for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger
          talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?
        </BodyText>
        <PortfolioLink />
      </TextWrapper>
      <Skills />
      <BottomNav />
    </PageWrapperCenter>
    </TransWrap>
  )
}


export default DevComponent
