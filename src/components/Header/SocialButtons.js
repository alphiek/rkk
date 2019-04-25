import React from 'react'
import { StaticQuery, graphql } from 'gatsby'


const SocialButtons = ({ data }) => (
    <div>
      <a
        href={`mailto:${data.site.siteMetadata.email}`}
      >Email</a>
      <a
        href={data.site.siteMetadata.facebook}
        target="_blank"
        rel="noopener noreferrer"
      >Facebook</a>
      <a
        href={data.site.siteMetadata.twitter}
        target="_blank"
        rel="noopener noreferrer"
      >Twitter</a>
      <a
        href={data.site.siteMetadata.insta}
        target="_blank"
        rel="noopener noreferrer"
      >Instagram</a>
      <a
        href={data.site.siteMetadata.pin}
        target="_blank"
        rel="noopener noreferrer"
      >Pinterest</a>
      <a
        href={data.site.siteMetadata.linked}
        target="_blank"
        rel="noopener noreferrer"
      >LinkedIn</a>
    </div>
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
