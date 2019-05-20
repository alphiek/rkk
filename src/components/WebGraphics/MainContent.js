import React from 'react'
import { graphicsData } from '../Copy/copy'
import { HeadingText } from '../Global/Shared'
import { H2Services, ListItem, BodyText } from '../Global/textSizes'
import Fade from 'react-reveal/Fade'

const MainContent = () => {
  return (
    <>
    {
      graphicsData.map(data =>
        <Fade key={data.key} bottom cascade>
          <HeadingText>{data.title}</HeadingText>
          <BodyText>{data.description}</BodyText>
          <div style={{ paddingBottom: '0.5em'}}>
              <H2Services>Services</H2Services>
              <ul>
              {data.services.map(service =>
                <ListItem key={service}>{service}</ListItem>
              )}
              </ul>
          </div>
         </Fade>
      )
    }
    </>
  )
}

export default MainContent
