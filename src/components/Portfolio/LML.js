import React from 'react'
import {
  TextContainer,
  ListWrapper,
  Wrapper,
  InfoFlex,
  Title,
  Tech,
  Description,
  ServiceWrapper
} from '../Global/PortfolioShared'
import FodeImage from './FodeImage'

const tech = [
  'Webflow',
  'Wordpress',
  'HTML',
  'CSS',
  'jQuery',

]

const services = [
  'Website Redesign',
  'Rebranding',
  'Wordpress CMS',
  'Blog Portal',
  'Property Portal',
  'HTML Email',
  'Ghost Writing',
  'Social Graphics',
  'Web Graphics',
  'Mobile Optimisation',
  'SEO'
]

const LML = () => {
  const list = tech.map(item => <Tech key={item}>{item}</Tech>)
  const serviceList = services.map(service => <Tech key={service}>{service}</Tech>)
  return (
    <Wrapper>
    <TextContainer>
    <Title>Like-Minded Living</Title>
      <InfoFlex>
        <ListWrapper>
          {list}
        </ListWrapper>
        <Description>
          This design is fucking brilliant. Never, never assume that what you have achieved is fucking good enough.
          Remember it’s called the creative process, it’s not the creative fucking moment. Use your fucking hands.
          Think about all the fucking possibilities. Why are you fucking reading all of this? Get back to work.
       </Description>
      </InfoFlex>
      <ServiceWrapper>
        {serviceList}
      </ServiceWrapper>
    </TextContainer>
    <FodeImage />
    </Wrapper>
  )
}

export default LML
