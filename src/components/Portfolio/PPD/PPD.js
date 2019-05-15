import React from 'react'
import { PoseGroup } from 'react-pose'
import { ppdData } from '../copy'
import InfoFlexContainer from '../InfoFlexContainer'
import {
  Wrapper,
} from '../PortfolioShared'
import PPDImage from './PPDImage'

const PPD = ({ ppd, onClickToggle }) => {
  const live = true
  return (
    <PoseGroup>
     {
       ppd && [
        ppdData.map(item =>
          <Wrapper key={item.key}>
            <PPDImage />
            <InfoFlexContainer
            item={item}
            onClickToggle={onClickToggle}
            live={live}
            />
         </Wrapper>
         )
       ]
     }
     </PoseGroup>
  )
}

export default PPD
