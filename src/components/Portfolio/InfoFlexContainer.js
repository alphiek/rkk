import React from 'react'
import styled from 'styled-components'
import { color } from '../Global/variables'
import Fade from 'react-reveal/Fade'
import {
  H1,
  H2Services,
  H3Built,
  ListItem,
  BodyText,
} from '../Global/textSizes'
import { Divider } from '../Global/Shared'
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
import VisitSiteIcon from './VisitSiteIcon'

const PortfolioTitle = styled(H1)`
  border-bottom: 0.15em solid ${color.secondary};
  padding-bottom: 0.2em;
  margin-bottom: 0.3em;
  width: 10em;
  @media only screen and (max-width: 1024px) {
   margin-top: 1em;
 }
 @media only screen and (max-width: 570px) {
   width: auto;
 }
`
const Description = styled(BodyText)`
  margin-left: 1em;
  padding-top: 0.5em;
  padding-bottom: 0.8em;
  @media only screen and (max-width: 570px) {
    margin-left: 0;
  }
`

const ServiceWrapPortfolio = styled(ServiceWrapper)`
  width: 95%;
  @media only screen and (max-width: 570px) {
   text-align: right;
   width: 95%;
  }
`

const InfoFlexContainer = ({ item, onClickToggle, live }) => {
  return (
    <>
    <Fade bottom delay={200}>
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
          <VisitSiteIcon />
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
    </Fade>
    <Divider style={{ alignSelf: 'flex-start', marginLeft: '1.8em', marginTop: '0.5em'}} />
    <PortfolioPageLnk
     aria-label='Back to main portfolio'
     id='close'
     onClick={onClickToggle}>
     Back to Portfolio
    </PortfolioPageLnk>
    </>
  )
}

export default InfoFlexContainer
