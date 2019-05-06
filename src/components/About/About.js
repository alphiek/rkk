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

const About = ({ children }) => {
  return (
    <>
    <PageWrapper>
    <Fade left>
      <AboutWrapper>
      <Fade bottom >
        <AboutTitle>About</AboutTitle>
      </Fade>
      <Fade bottom cascade>
        <AboutText>Normally, both your asses would be dead as fucking fried chicken,
        but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you,
        I wanna help you. But I can't give you this case, it don't belong to me. Besides,
        I've already been through too much shit this morning over this case to hand it over to your dumb ass.
        <br />
        Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house,
        fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?
        </AboutText>
      </Fade>
      </AboutWrapper>
      </Fade>
      {children}
    </PageWrapper>
    <Copyright>© {new Date().getFullYear()}, RKK Creative</Copyright>
    </>
  )
}
export default About

About.propTypes = {
  children: PropTypes.node
}
