import React from 'react'
import styled from 'styled-components'
import { color } from '../Global/variables'
import {
  H1,
  H2Services,
  H3Built,
  ListItem,
  BodyText,
} from '../Global/textSizes'

import { PortfolioPageLnk } from '../Global/nonTransitionLinks'
import {
  DevTag,
  ServiceWrapper,
  InfoFlex,
  InfoFlexChild,
  ServiceFlexChild,
  SiteTag
} from './PortfolioShared'
import DevelopmentIcon from './DevelopmentIcon'

const PortfolioTitle = styled(H1)`
  border-bottom: 0.15em solid ${color.secondary};
  padding-bottom: 0.5em;
  margin-bottom: 0.3em;
  width: 10em;
  @media only screen and (max-width: 1024px) {
   margin-top: 1em;
 }
`
const Description = styled(BodyText)`
  margin-left: 1em;
  padding-top: 0.5em;
  padding-bottom: 0.8em;
`

const ServiceWrapPortfolio = styled(ServiceWrapper)`
  width: 95%;
  @media only screen and (max-width: 570px) {
   text-align: right;
   width: 95%;
  }
`

const InfoFlexContainer = ({ item, onClickToggle, live }) => {
  console.log(live)
  return (
    <>
    <InfoFlex>
      <InfoFlexChild>
        <PortfolioTitle>{item.title}</PortfolioTitle>
        {
          !live ?
          <>
          <DevelopmentIcon />
          <DevTag>In Development</DevTag>
          </>
          :
          <>
          <DevelopmentIcon />
          <SiteTag
            href={item.site}
            target="_blank"
            rel="noopener noreferrer">
            Visit Site
          </SiteTag>
          </>
        }
        <Description>
         {item.description}
        </Description>
       </InfoFlexChild>
       <ServiceFlexChild>
         <H2Services>Services</H2Services>
         <ServiceWrapPortfolio>
         {item.services.map(service =>
           <ListItem key={service}>{service}</ListItem>
         )}
         </ServiceWrapPortfolio>
       </ServiceFlexChild>
       <ServiceFlexChild>
         <H3Built>Built with</H3Built>
           <ServiceWrapPortfolio>
              {item.tech.map(tech =>
                <ListItem key={tech}>{tech}</ListItem>
              )}
           </ServiceWrapPortfolio>
       </ServiceFlexChild>
    </InfoFlex>
    <PortfolioPageLnk
     aria-label='Back to main portfolio'
     id='close'
     onClick={onClickToggle}>
     ---Back to Portfolio---
    </PortfolioPageLnk>
    </>
  )
}

export default InfoFlexContainer
