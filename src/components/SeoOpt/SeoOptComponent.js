import React from 'react'
import { PageWrapperCenter, TextWrapper, HeadingText, BodyText } from '../Global/Shared'
import NumberNav from '../Global/Numbers'
import PortfolioLink from '../Global/PortfolioLink'
import BottomNav from '../Global/BottomNav'

const SeoOptComponent = () => {
  return (
    <PageWrapperCenter>
      <NumberNav />
      <TextWrapper>
        <HeadingText>SEO Optimisation</HeadingText>
        <BodyText>
          The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men.
          Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness,
          for he is truly his brother's keeper and the finder of lost children.
          And I will strike down upon thee with great vengeance and furious anger those who would attempt
           to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.
           <PortfolioLink />
        </BodyText>
      </TextWrapper>
      <BottomNav />
    </PageWrapperCenter>
  )
}


export default SeoOptComponent
