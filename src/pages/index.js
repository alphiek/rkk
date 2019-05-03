import React from "react"
import LandingContainer from '../components/Landing/LandingContainer'
import Helmet from "react-helmet"

const index = () => (
  <>
  <Helmet>
    <html lang="en"/>
    <title>RKK Creative Freelance Web Design and Development Paphos</title>
    <meta name="description" content="Freelance Web Design and Development Services"></meta>

    <meta property="og:url" content="https://rkkcreative.xyz"></meta>
    <meta property="og:type" content="website"></meta>
    <meta property="og:title" content="Freelance Web Design and Development Services"></meta>
    <meta property="og:image" content='tbc'></meta>
    <meta property="og:image:width" content="1200"></meta>
    <meta property="og:image:height" content="630"></meta>
    <meta property="og:description" content="Something Here"></meta>
    <meta property="og:site_name" content="RKK Creative"></meta>

    <meta name="twitter:card" content="summary_large_image"></meta>
    <meta name="twitter:site" content="@rkkcreative"></meta>
    <meta name="twitter:url" content="https://rkkcreative.xyz"></meta>
    <meta name="twitter:title" content="RKK Creative"></meta>
    <meta name="twitter:description" content="Freelance Web Design and Development Services"></meta>
    <meta name="twitter:image" content='tbc'></meta>

    <script type="application/ld+json">{`
        {
            "@context": "http://schema.org",
            "@type": "Website",
            "name": "RKK Creative",
            "description": "Freelance Web Design and Development Services",
            "image": "image",
            "logo": "tbc",
            "@id": "https://rkkcreative.xyz/",
            "url": "https://rkkcreative.xyz/",
            "telephone": "",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "",
              "addressLocality": "",
              "postalCode": "",
              "addressCountry": ""
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
              "https://www.facebook.com/rkkcreative/",
              "https://www.instagram.com/rkkcreative/"
              "https://www.twitter.com/rkkcreative/"
            ],
            "priceRange": "$"
        }
   `}</script>
  </Helmet>
  <LandingContainer />
  </>
)

export default index
