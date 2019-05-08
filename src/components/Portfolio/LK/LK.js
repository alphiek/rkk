import React from 'react'
import { PoseGroup } from 'react-pose'
import { lkData } from '../copy'
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
import LKImage from './LKImage'

const LK = ({ lk }) => {
  return (
    <PoseGroup>
     {
       lk && [
         lkData.map(item =>
           <Wrapper key={item.key}>
             <LeftWrapper style={{marginLeft: '2em', marginRight: '2em'}}>
               <Title>{item.title}</Title>
               <DevelopmentIcon />
               <DevTag>In Development</DevTag>
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
           <LKImage />
          </Wrapper>
         )
       ]
     }
     </PoseGroup>
  )
}

export default LK
