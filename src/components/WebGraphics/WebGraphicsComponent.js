import React from 'react'
import Breakpoint from 'react-socks'
import Fade from 'react-reveal/Fade'
import { graphicsData } from '../Copy/copy'
import NumberNav from '../Global/NumberNav'
import PortfolioLink from '../Global/PortfolioLink'
import BottomNav from '../Global/BottomNav'
import Carousel from './Carousel'
import { TransWrap } from '../Global/TransWrap'
import { FullWidthWrapper, HeadingText, MobileWidthWrapper } from '../Global/Shared'
import { H2Services, ListItem, BodyText } from '../Global/textSizes'
import { PageWrapperCenter } from '../Global/ServiceFlexWrapper'

const WebGraphicsComponent = () => {
  return (
    <TransWrap>
    <PageWrapperCenter>
       <Breakpoint desktop only>
         <NumberNav />
       </Breakpoint>
      <FullWidthWrapper>
      <Fade right delay={200}>
        <Carousel />
      </Fade>
        {
          graphicsData.map(data =>
            <Fade key={data.key} bottom cascade>
            <MobileWidthWrapper>
              <HeadingText>{data.title}</HeadingText>
              <BodyText>{data.description}</BodyText>
              <div style={{ paddingBottom: '0.5em'}}>
                  <H2Services>Services</H2Services>
                  {data.services.map(service =>
                    <ListItem key={service}>{service}</ListItem>
                  )}
              </div>
              </MobileWidthWrapper>
            </Fade>
          )
        }
      <PortfolioLink />
      <Breakpoint desktop only>
        <BottomNav />
      </Breakpoint>
      </FullWidthWrapper>
    </PageWrapperCenter >
  </TransWrap>
  )
}

export default WebGraphicsComponent
