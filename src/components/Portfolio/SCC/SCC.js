import React from 'react'
import { PoseGroup } from 'react-pose'
import { sccData } from '../copy'
import { LeftWrapper } from '../../Global/ServiceFlexWrapper'
import {
  Wrapper,
  Title,
  DevTag,
  Description,
  Services,
  ServiceWrapper,
  ListWrapper,
  Tech,
  Built,
  Line
} from '../../Global/PortfolioShared'
import DevelopmentIcon from '../DevelopmentIcon'
import SCCImage from './SCCImage'

const SCC = ({ scc }) => {
  return (
    <PoseGroup>
     {
       scc && [
        sccData.map(item =>
           <Wrapper key={item.key}>
             <LeftWrapper style={{marginLeft: '2em', marginRight: '2em'}}>
               <Title>{item.title}</Title>
               <Description>
                {item.description}
               </Description>
               <Line />
               <Services>Services</Services>
                <ServiceWrapper>
                {item.services.map(service =>
                  <Tech key={service}>{service}</Tech>
                )}
                </ServiceWrapper>
                <Line />
                <Built>Built with</Built>
                <ListWrapper>
                 {item.tech.map(tech =>
                   <Tech key={tech}>{tech}</Tech>
                 )}
                </ListWrapper>
            </LeftWrapper>
           <SCCImage />
          </Wrapper>
         )
       ]
     }
     </PoseGroup>
  )
}

export default SCC
