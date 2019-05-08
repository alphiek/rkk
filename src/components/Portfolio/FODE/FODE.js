import React from 'react'
import { PoseGroup } from 'react-pose'
import { fodeData } from '../copy'
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
import FodeImage from './FodeImage'

const FODE = ({ fode }) => {
  return (
    <PoseGroup>
     {
       fode && [
         fodeData.map(item =>
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
           <FodeImage />
          </Wrapper>
         )
       ]
     }
     </PoseGroup>
  )
}

export default FODE
