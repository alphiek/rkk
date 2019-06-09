import React from "react"
import { graphql } from 'gatsby'
import Helmet from "react-helmet"
import PortfolioContainer from '../components/Portfolio/PortfolioContainer'

const Portfolio = ({ data }) => {
  console.log(data)
  const siteUrl = data.site.siteMetadata.siteUrl
  const defaultImage = data.site.siteMetadata.defaultImage
  const logo = data.site.siteMetadata.logo
  const name = data.site.siteMetadata.author
  return (
    <>
    <Helmet>
      <html lang="en"/>
      <title>RKK Creative Portfolio view our recent work</title>
      <meta name="description" content="Looking for high quality, competitive freelance Web Design and Development Services? Contact us for a free consultation"></meta>

      <meta property="og:url" content={siteUrl}></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:title" content="Freelance Websites, Web Apps, Graphics and Development"></meta>
      <meta property="og:image" content={siteUrl + defaultImage}></meta>
      <meta property="og:image:width" content="1200"></meta>
      <meta property="og:image:height" content="630"></meta>
      <meta property="og:description" content="Looking for high quality, competitive freelance Web Design and Development Services? Contact us for a free consultation"></meta>
      <meta property="og:site_name" content={name}></meta>

      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:site" content="@rkkcreative"></meta>
      <meta name="twitter:url" content={siteUrl}></meta>
      <meta name="twitter:title" content="Freelance Websites, Web Apps, Graphics and Development"></meta>
      <meta name="twitter:description" content="Looking for high quality, competitive freelance Web Design and Development Services? Contact us for a free consultation"></meta>
      <meta name="twitter:image" content={siteUrl + defaultImage}></meta>

      <script type="application/ld+json">{`
          {
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              "name": "${name}",
              "description": "Looking for high quality, competitive freelance Web Design and Development Services. Contact us for a free consultation",
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
    <PortfolioContainer />
    </>
  )
}

export default Portfolio

export const query = graphql`
  query PortfolioPageQuery {
    site {
      siteMetadata {
        author
        siteUrl
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
