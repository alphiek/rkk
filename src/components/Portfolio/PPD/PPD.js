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
} from '../../Global/PortfolioShared'
import FodeImage from '../FODE/FodeImage'

const tech = [
  'Webflow',
  'HTML',
  'CSS',
  'jQuery',

]

const services = [
  'Website Design',
  'Branding',
  'Blog',
  'Ghost Writing',
  'Social Graphics',
  'Web Graphics',
  'Mobile Optimisation',
  'SEO'
]

const PPD = () => {
  const list = tech.map(item => <Tech key={item}>{item}</Tech>)
  const serviceList = services.map(service => <Tech key={service}>{service}</Tech>)
  return (
    <Wrapper>
    <TextContainer>
    <Title>Paphos Painter Decorators</Title>
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

export default PPD