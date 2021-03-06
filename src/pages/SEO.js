import React from "react"
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { BreakpointProvider} from 'react-socks'
import { setDefaultBreakpoints } from 'react-socks'
import SeoOptComponent from '../components/SeoOpt/SeoOptComponent'

setDefaultBreakpoints([
  { mobile: 0 },
  { tablet: 824 },
  { desktop: 1025 }
]);

const SEO = ({ data }) => {
  const siteUrl = data.site.siteMetadata.siteUrl
  const seoImage = data.site.siteMetadata.seoImage
  const logo = data.site.siteMetadata.logo
  const name = data.site.siteMetadata.author
  return (
    <>
    <Helmet>
      <html lang="en"/>
      <title>RKK Creative Technical SEO and Mobile Optmisation</title>
      <meta name="description" content="SEO services to improve website ranking and visibility. Contact us for a free SEO healthcheck"></meta>

      <meta property="og:url" content={siteUrl}></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:title" content="SEO and Mobile Optmisation"></meta>
      <meta property="og:image" content={siteUrl + seoImage}></meta>
      <meta property="og:image:width" content="1200"></meta>
      <meta property="og:image:height" content="630"></meta>
      <meta property="og:description" content="Technical SEO services to improve website ranking and visibility. Contact us for a free SEO healthcheck"></meta>
      <meta property="og:site_name" content={name}></meta>

      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:site" content="@rkkcreative"></meta>
      <meta name="twitter:url" content={siteUrl}></meta>
      <meta name="twitter:title" content="SEO and Mobile Optmisation"></meta>
      <meta name="twitter:description" content="Technical SEO services to improve website ranking and visibility. Contact us for a free SEO healthcheck"></meta>
      <meta name="twitter:image" content={siteUrl + seoImage}></meta>

      <script type="application/ld+json">{`
          {
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              "name": "${name}",
              "description": "Technical SEO services to improve website ranking and visibility. Contact us for a free SEO healthcheck",
              "image": "${siteUrl}${seoImage}",
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
      <SeoOptComponent />
    </BreakpointProvider>
    </>
  )
}

export default SEO

export const query = graphql`
  query SeoPageQuery {
    site {
      siteMetadata {
        author
        siteUrl
        logo
        seoImage
        facebook
        insta
        twitter
        pin
        linked
      }
    }
  }
`
