import React from 'react'
import { PoseGroup } from 'react-pose'
import { ppdData } from '../copy'
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
import PPDImage from './PPDImage'

const PPD = ({ ppd }) => {
  return (
    <PoseGroup>
     {
       ppd && [
        ppdData.map(item =>
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
           <PPDImage />
          </Wrapper>
         )
       ]
     }
     </PoseGroup>
  )
}

export default PPD
