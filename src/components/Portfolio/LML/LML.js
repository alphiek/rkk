import React from 'react'
import { PoseGroup } from 'react-pose'
import { lmlData } from '../copy'
import { Services, ServiceList } from '../../Global/Shared'
import {
  Wrapper,
  Title,
  DevTag,
  Description,
  ServiceWrapper,
  InfoFlex,
  InfoFlexChild,
  ServiceFlexChild,
  Link
} from '../PortfolioShared'
import DevelopmentIcon from '../DevelopmentIcon'
import LMLImage from './LMLImage'

const LML = ({ lml, onClickToggle }) => {
  return (
    <PoseGroup>
     {
       lml && [
         lmlData.map(item =>
           <Wrapper key={item.key}>
             <LMLImage />
             <InfoFlex>
               <InfoFlexChild>
                 <Title>{item.title}</Title>
                 <DevelopmentIcon />
                 <DevTag>Visit Site</DevTag>
                 <Description>
                  {item.description}
                 </Description>
                 <Link
                  id='close'
                  onClick={onClickToggle}>
                  ---Back to Portfolio---
                </Link>
                </InfoFlexChild>
                <ServiceFlexChild>
                  <Services>Services</Services>
                  <ServiceWrapper>
                  {item.services.map(service =>
                    <ServiceList key={service}>{service}</ServiceList>
                  )}
                  </ServiceWrapper>
                </ServiceFlexChild>
                <ServiceFlexChild>
                  <Services>Built with</Services>
                    <ServiceWrapper>
                       {item.tech.map(tech =>
                         <ServiceList key={tech}>{tech}</ServiceList>
                       )}
                    </ServiceWrapper>
                </ServiceFlexChild>
              </InfoFlex>
          </Wrapper>
         )
       ]
     }
     </PoseGroup>
  )
}

export default LML
