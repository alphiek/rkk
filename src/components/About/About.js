import React from 'react'
import Fade from 'react-reveal/Fade'
import PropTypes from 'prop-types'
import { aboutData } from '../Copy/copy'
import {
  PageWrapper,
  AboutTitle,
  AboutWrapper,
  AboutText,
 } from '../Global/MenuShared'

const About = ({ children }) => {
  return (
    <>
    {aboutData.map(data =>
      <PageWrapper key={data.key}>
       <Fade left>
        <AboutWrapper>
        <Fade bottom >
          <AboutTitle>{data.title}</AboutTitle>
        </Fade>
        <Fade bottom cascade>
          <AboutText>
          {data.description}
          </AboutText>
          <AboutText>
          {data.descriptionTwo}
          </AboutText>
         </Fade>
        </AboutWrapper>
        </Fade>
        {children}
      </PageWrapper>
    )}
    </>
  )
}
export default About

About.propTypes = {
  children: PropTypes.node
}
