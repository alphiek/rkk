import React from 'react'
import Fade from 'react-reveal/Fade'
import {
  PageWrapper,
  AboutWrapper,
  AboutTitle,
  AboutText,
  Copyright }
  from './aboutStyles'
import PropTypes from 'prop-types'
import { aboutData } from '../Copy/copy'

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
    <Copyright>© {new Date().getFullYear()} RKK Creative, all rights reserved </Copyright>
    </>
  )
}
export default About

About.propTypes = {
  children: PropTypes.node
}
