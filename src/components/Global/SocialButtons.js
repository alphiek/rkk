import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Facebook, Insta, Linked, Mail, Pin, Twitter } from './SocialIconsGreen'
import Fade from 'react-reveal/Fade'
import PropTypes from 'prop-types'

const SocialWrapper = styled.div`
  margin-top: 1.5em;
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 1024px) {
    flex-direction: row;
    width: 40%;
  }
  @media only screen and (max-width: 1024px) {
    margin-bottom: 1em;
    flex-direction: row;
    width: 50%;
  }
  @media only screen and (max-width: 570px){
    margin-top: 2em;
    margin-bottom: 2em;
    width: 100%;
  }

`
const SocialButtons = ({ data }) => (
    <SocialWrapper>
    <Fade bottom delay={300}>
      <a
        href={`mailto:${data.site.siteMetadata.email}`}
      ><Mail /></a>
    </Fade>
    <Fade bottom delay={350}>
      <a
        href={data.site.siteMetadata.facebook}
        target="_blank"
        rel="noopener noreferrer"
      ><Facebook /></a>
    </Fade>
    <Fade bottom delay={400}>
      <a
        href={data.site.siteMetadata.twitter}
        target="_blank"
        rel="noopener noreferrer"
      ><Twitter /></a>
    </Fade>
    <Fade bottom delay={450}>
      <a
        href={data.site.siteMetadata.insta}
        target="_blank"
        rel="noopener noreferrer"
      ><Insta /></a>
    </Fade>
    <Fade bottom delay={500}>
      <a
        href={data.site.siteMetadata.pin}
        target="_blank"
        rel="noopener noreferrer"
      ><Pin /></a>
    </Fade>
    <Fade bottom delay={550} >
      <a
        href={data.site.siteMetadata.linked}
        target="_blank"
        rel="noopener noreferrer"
      ><Linked /></a>
     </Fade>
     </SocialWrapper>
)

export default () => (
  <StaticQuery
  query={graphql`
    query SocialQuery {
      site {
        siteMetadata {
          email
          twitter
          facebook
          insta
          pin
          linked
        }
      }
    }
  `}
    render={data => <SocialButtons data={data} />}
  />
)

SocialButtons.propTypes = {
  data: PropTypes.shape({
      site: PropTypes.shape({
        siteMetadata: PropTypes.shape({
          email: PropTypes.string.isRequired,
          facebook: PropTypes.string.isRequired,
          insta: PropTypes.string.isRequired,
          linked: PropTypes.string.isRequired,
          pin: PropTypes.string.isRequired,
          twitter: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }
