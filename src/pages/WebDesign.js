import React from "react"
import { graphql } from 'gatsby'
import WebDesignComponent from '../components/WebDesign/WebDesignComponent'
import { Helmet } from 'react-helmet'
import { BreakpointProvider} from 'react-socks'
import { setDefaultBreakpoints } from 'react-socks'

setDefaultBreakpoints([
  { mobile: 0 },
  { tablet: 824 },
  { desktop: 1025 }
]);

const WebDesign = ({ data }) => {
  const siteUrl = data.site.siteMetadata.siteUrl
  const webImage = data.site.siteMetadata.webDesignImage
  const logo = data.site.siteMetadata.logo
  const name = data.site.siteMetadata.author
  return (
    <>
    <Helmet>
      <html lang="en"/>
      <title>RKK Creative Web Design</title>
      <meta name="description" content="Custom crafted responsive websites and web applications to support brand direction and digital growth"></meta>

      <meta property="og:url" content={siteUrl}></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:title" content={name}></meta>
      <meta property="og:image" content={siteUrl + webImage}></meta>
      <meta property="og:image:width" content="1200"></meta>
      <meta property="og:image:height" content="630"></meta>
      <meta property="og:description" content="Custom crafted responsive websites and web applications to support brand direction and digital growth"></meta>
      <meta property="og:site_name" content={siteUrl}></meta>

      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:site" content="@rkkcreative"></meta>
      <meta name="twitter:url" content={siteUrl}></meta>
      <meta name="twitter:title" content={name}></meta>
      <meta name="twitter:description" content="Custom crafted responsive websites and web applications to support brand direction and digital growth"></meta>
      <meta name="twitter:image" content={siteUrl + webImage}></meta>

      <script type="application/ld+json">{`
          {
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              "name": ${name},
              "description": "Web Design Paphos",
              "image": "${siteUrl}${webImage}",
              "logo": "${siteUrl}${logo}",
              "@id": "${siteUrl}",
              "url": "${siteUrl}",
              "telephone": "",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "8 Panagiotou Christodoulou",
                "addressLocality": "Koili, Paphos",
                "postalCode": "8543",
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
      <WebDesignComponent/>
    </BreakpointProvider>
    </>
  )
}

export default WebDesign

export const query = graphql`
  query WebDesignPageQuery {
    site {
      siteMetadata {
        author
        siteUrl
        logo
        webDesignImage
        facebook
        insta
        twitter
        pin
        linked
      }
    }
  }
`
