import React from 'react'
import styled from 'styled-components'
import { color } from '../Global/variables'
import {
  H1,
  H2Services,
  H3Built,
  ListItem,
  BodyText,
  PortfolioLnk
} from '../Global/textSizes'

import {
  DevTag,
  ServiceWrapper,
  InfoFlex,
  InfoFlexChild,
  ServiceFlexChild,
  Link
} from './PortfolioShared'
import DevelopmentIcon from './DevelopmentIcon'

export const PortfolioTitle = styled(H1)`
  border-bottom: 0.15em solid ${color.secondary};
  padding-bottom: 0.5em;
  margin-bottom: 0.5em;
  width: 10em;
`
export const Description = styled(BodyText)`
  margin-left: 1em;
  padding-top: 0.5em;
  padding-bottom: 0.8em;
`

const InfoFlexContainer = ({ item, onClickToggle }) => {
  return (
    <InfoFlex>
      <InfoFlexChild>
        <PortfolioTitle>{item.title}</PortfolioTitle>
        <DevelopmentIcon />
        <DevTag>In Development</DevTag>
        <Description>
         {item.description}
        </Description>
        <PortfolioLnk
         id='close'
         onClick={onClickToggle}>
         ---Back to Portfolio---
       </PortfolioLnk>
       </InfoFlexChild>
       <ServiceFlexChild>
         <H2Services>Services</H2Services>
         <ServiceWrapper>
         {item.services.map(service =>
           <ListItem key={service}>{service}</ListItem>
         )}
         </ServiceWrapper>
       </ServiceFlexChild>
       <ServiceFlexChild>
         <H3Built>Built with</H3Built>
           <ServiceWrapper>
              {item.tech.map(tech =>
                <ListItem key={tech}>{tech}</ListItem>
              )}
           </ServiceWrapper>
       </ServiceFlexChild>
     </InfoFlex>
  )
}

export default InfoFlexContainer
