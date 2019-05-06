import React from 'react'
import styled from 'styled-components'
import RenderMenu from '../Header/RenderMenu'
import { color, font, weight, spacing } from '../Global/variables'
import SocialButtons from '../Header/SocialButtons'
import Fade from 'react-reveal/Fade'

const PageWrapper = styled.div`
  width: 31%;
  border-right: 0.3em solid ${color.secondary};

@media only screen
  and (max-width: 824px) {
    width: 90%;
    margin: 5%;
    border-right: none;
    margin-bottom: 5em;
  }
`
const AboutWrapper = styled.div`
  border: 0.3em solid ${color.white};
  height: 22em;
  margin-left: 1.5em;
  margin-right: 1.5em;
  padding: 1.8em;
  overflow: hidden;
`
const AboutTitle = styled.h2`
  font-size: 1.8em;
  color: ${color.secondary};
  font-family: ${font.muli};
  font-weight: ${weight.extraBold};
  letter-spacing: ${spacing.narrow};
@media only screen
  and (max-width: 824px) {
    font-size: 2.2em;
  }
`
const AboutText = styled.p`
  margin-top: 2em;
  font-size: 0.65em;
  color: ${color.white};
  font-weight: ${weight.light};
  line-height: 130%;
@media only screen
  and (max-width: 824px) {
    font-size: 1em;
  }
`
const Copyright = styled.p`
  font-weight: ${weight.light};
  position: absolute;
  bottom: 4em;
  margin-left: 4em;
  font-size: 0.5em;
  color: ${color.white};
`
const About = (props) => {
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
        {
         props.compProps.tablet || props.compProps.mobile ?
         <React.Fragment>
           <RenderMenu renderMenu={props.renderMenu}/>
           <SocialButtons />
         </React.Fragment>
         : null
        }
    </PageWrapper>
    <Copyright>© {new Date().getFullYear()}, RKK Creative</Copyright>
    </>
  )
}

export default About
