import React from 'react'
import { PageWrapperCenter, TextWrapper, HeadingText, BodyText } from '../Global/Shared'
import NumberNav from '../Global/Numbers'
import PortfolioLink from '../Global/PortfolioLink'
import BottomNav from '../Global/BottomNav'
import SeoImage from './SeoImage'
import { TransWrap } from '../Global/TransWrap'

const SeoOptComponent = () => {
  return (
    <TransWrap>
    <PageWrapperCenter>
      <NumberNav />
      <TextWrapper>
        <HeadingText>SEO Optimisation</HeadingText>
        <BodyText>
          The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men.
          Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness,
          for he is truly his brother's keeper and the finder of lost children.
        </BodyText>
        <PortfolioLink />
      </TextWrapper>
      <SeoImage />
      <BottomNav />
    </PageWrapperCenter>
    </TransWrap>
  )
}


export default SeoOptComponent
