import React from "react"
import { graphql } from 'gatsby'
import DevComponent from '../components/Development/DevComponent'
import Helmet from "react-helmet"
import { BreakpointProvider} from 'react-socks'
import { setDefaultBreakpoints } from 'react-socks'

setDefaultBreakpoints([
  { mobile: 0 },
  { tablet: 824 },
  { desktop: 1025 }
]);

const WebDevelopment = ({ data }) => {
  const siteUrl = data.site.siteMetadata.siteUrl
  const defaultImage = data.site.siteMetadata.defaultImage
  const logo = data.site.siteMetadata.logo
  const name = data.site.siteMetadata.author
  return (
    <>
    <Helmet>
      <html lang="en"/>
      <title>RKK Creative Custom Built Websites and Web Applications</title>
      <meta name="description" content="Providing fast, lean and highly adaptable websites and web applications built for speed and user experience. Find out more..."></meta>

      <meta property="og:url" content={siteUrl}></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:title" content="Custom Built Websites and Web Applications"></meta>
      <meta property="og:image" content={siteUrl + defaultImage}></meta>
      <meta property="og:image:width" content="1200"></meta>
      <meta property="og:image:height" content="630"></meta>
      <meta property="og:description" content="Providing fast, lean and highly adaptable websites and web applications built for speed and user experience. Find out more..."></meta>
      <meta property="og:site_name" content={name}></meta>

      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:site" content="@rkkcreative"></meta>
      <meta name="twitter:url" content={siteUrl}></meta>
      <meta name="twitter:title" content="Custom Built Websites and Web Applications"></meta>
      <meta name="twitter:description" content="Providing fast, lean and highly adaptable websites and web applications built for speed and user experience. Find out more..."></meta>
      <meta name="twitter:image" content={siteUrl + defaultImage}></meta>

      <script type="application/ld+json">{`
          {
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              "name": "${name}",
              "description": "Providing fast, lean and highly adaptable websites and web applications built for speed and user experience. Find out more...",
              "image": "${siteUrl}${defaultImage}",
              "logo": "${siteUrl}${logo}",
              "@id": "${siteUrl}",
              "url": "${siteUrl}",
              "telephone": "",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Paphos",
                "addressCountry": "cy"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "09:00",
                "closes": "23:59"
              },
              "sameAs": [
                "${data.site.siteMetadata.facebook}",
                "${data.site.siteMetadata.insta}",
                "${data.site.siteMetadata.twitter}",
                "${data.site.siteMetadata.pin}",
                "${data.site.siteMetadata.linked}"
              ],
              "priceRange": "$"
          }
     `}</script>
    </Helmet>
    <BreakpointProvider>
      <DevComponent />
    </BreakpointProvider>
    </>
  )
}


export default WebDevelopment

export const query = graphql`
  query DevPageQuery {
    site {
      siteMetadata {
        siteUrl
        author
        logo
        defaultImage
        facebook
        insta
        twitter
        pin
        linked
      }
    }
  }
`
