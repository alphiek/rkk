import React from 'react'
import { PoseGroup } from 'react-pose'
import { sccData } from '../copy'
import InfoFlexContainer from '../InfoFlexContainer'
import {
  Wrapper,
} from '../PortfolioShared'
import SCCImage from './SCCImage'

const SCC = ({ scc, onClickToggle }) => {
  const live = false
  return (
    <PoseGroup>
     {
       scc && [
        sccData.map(item =>
          <Wrapper key={item.key}>
            <SCCImage />
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

export default SCC
