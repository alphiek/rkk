import React from 'react'
import { PoseGroup } from 'react-pose'
import { psmData } from '../copy'
import InfoFlexContainer from '../InfoFlexContainer'
import {
  Wrapper,
} from '../PortfolioShared'
import PSMImage from './PSMimage'

const PSM = ({ psm, onClickToggle }) => {
  const live = true
  return (
    <PoseGroup>
     {
       psm && [
        psmData.map(item =>
          <Wrapper key={item.key}>
            <PSMImage />
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

export default PSM
