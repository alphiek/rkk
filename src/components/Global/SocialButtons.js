import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import facebook from '../../images/Icons/Icon-Facebook.svg'
import insta from '../../images/Icons/Icon-Instagram.svg'
import linked from '../../images/Icons/Icon-LinkedIn.svg'
import mail from '../../images/Icons/Icon-Mail.svg'
import pin from '../../images/Icons/Icon-Pinterest.svg'
import twitter from '../../images/Icons/Icon-Twitter.svg'
import Fade from 'react-reveal/Fade'
import PropTypes from 'prop-types'

const SocialWrapper = styled.div`
  margin-top: 1.5em;
  margin-bottom: 0.5em;
  display: flex;
  width: 55%;
  justify-content: space-between;
@media only screen
    and (max-width: 824px)
    and (orientation:portrait) {
      width: 100%;
      padding: 10%;
    }
`
const Icon = styled.img`
  width: auto;
  height: 1em;
`

const SocialButtons = ({ data }) => (
    <SocialWrapper>
    <Fade bottom delay={300}>
      <a
        href={`mailto:${data.site.siteMetadata.email}`}
      ><Icon src={mail} alt='Email Link' /></a>
    </Fade>
    <Fade bottom delay={350}>
      <a
        href={data.site.siteMetadata.facebook}
        target="_blank"
        rel="noopener noreferrer"
      ><Icon src={facebook} alt='Facebook Link' /></a>
    </Fade>
    <Fade bottom delay={400}>
      <a
        href={data.site.siteMetadata.twitter}
        target="_blank"
        rel="noopener noreferrer"
      ><Icon src={twitter} alt='Twitter Link' /></a>
    </Fade>
    <Fade bottom delay={450}>
      <a
        href={data.site.siteMetadata.insta}
        target="_blank"
        rel="noopener noreferrer"
      ><Icon src={insta} alt='Instagram Link' /></a>
    </Fade>
    <Fade bottom delay={500}>
      <a
        href={data.site.siteMetadata.pin}
        target="_blank"
        rel="noopener noreferrer"
      ><Icon src={pin} alt='Instagram Link' /></a>
    </Fade>
    <Fade bottom delay={550} >
      <a
        href={data.site.siteMetadata.linked}
        target="_blank"
        rel="noopener noreferrer"
      ><Icon src={linked} alt='LinkedIn Link' /></a>
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
