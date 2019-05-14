import React from 'react'
import { PoseGroup } from 'react-pose'
import { lmlData } from '../copy'
import InfoFlexContainer from '../InfoFlexContainer'
import {
  Wrapper,
} from '../PortfolioShared'
import LMLImage from './LMLImage'

const LML = ({ lml, onClickToggle }) => {
  return (
    <PoseGroup>
     {
       lml && [
         lmlData.map(item =>
           <Wrapper key={item.key}>
             <LMLImage />
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

export default LML
