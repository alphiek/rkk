import React from 'react'
import { PoseGroup } from 'react-pose'
import { fodeData } from '../copy'
import InfoFlexContainer from '../InfoFlexContainer'
import {
  Wrapper,
} from '../PortfolioShared'
import FodeImage from './FodeImage'

const FODE = ({ fode, onClickToggle }) => {
  const live = false
  return (
    <PoseGroup>
     {
       fode && [
         fodeData.map(item =>
           <Wrapper key={item.key}>
             <FodeImage />
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

export default FODE
