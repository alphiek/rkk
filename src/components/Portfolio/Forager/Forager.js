import React from 'react'
import { PoseGroup } from 'react-pose'
import { foragerData } from '../copy'
import InfoFlexContainer from '../InfoFlexContainer'
import {
  Wrapper,
} from '../PortfolioShared'
import ForagerImage from './ForagerImage'

const Forager = ({ forager, onClickToggle }) => {
  const live = false
  return (
    <PoseGroup>
     {
       forager && [
         foragerData.map(item =>
           <Wrapper key={item.key}>
             <ForagerImage />
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

export default Forager
