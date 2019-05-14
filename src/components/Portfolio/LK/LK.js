import React from 'react'
import { PoseGroup } from 'react-pose'
import { lkData } from '../copy'
import InfoFlexContainer from '../InfoFlexContainer'
import {
  Wrapper,
} from '../PortfolioShared'
import LKImage from './LKImage'

const LK = ({ lk, onClickToggle }) => {
  return (
    <PoseGroup>
     {
       lk && [
         lkData.map(item =>
           <Wrapper key={item.key}>
             <LKImage />
             <InfoFlexContainer
              item={item}
              onClickToggle={onClickToggle}
              />
          </Wrapper>
         )
       ]
     }
     </PoseGroup>
  )
}

export default LK
