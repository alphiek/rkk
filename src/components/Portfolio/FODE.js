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
  'Gatsby',
  'React',
  'SnipCart',
  'DatoCMS',
]

const services = [
  'Ecommerce',
  'Progressive Web Application',
  'Site Design',
  'SEO',
]

const FODE = () => {
  const list = tech.map(item => <Tech key={item}>{item}</Tech>)
  const serviceList = services.map(service => <Tech key={service}>{service}</Tech>)
  return (
    <Wrapper>
    <TextContainer>
    <Title>House of Fode</Title>
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

export default FODE
