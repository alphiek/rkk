import React from "react"
import DevComponent from '../components/Development/DevComponent'
import Helmet from "react-helmet"
import ogImage from '../images/ogImage.png'
import logo from '../images/icon.png'

const Development = () => (
  <>
  <Helmet>
    <html lang="en"/>
    <title>RKK Creative Website and Web App Development Paphos</title>
    <meta name="description" content="Providing fast, lean and highly adaptable websites and web applications build for speed and user experience"></meta>

    <meta property="og:url" content="https://rkkcreative.xyz"></meta>
    <meta property="og:type" content="website"></meta>
    <meta property="og:title" content="Website and Web App Development Paphos"></meta>
    <meta property="og:image" content={ogImage}></meta>
    <meta property="og:image:width" content="1200"></meta>
    <meta property="og:image:height" content="630"></meta>
    <meta property="og:description" content="Providing fast, lean and highly adaptable websites and web applications build for speed and user experience"></meta>
    <meta property="og:site_name" content="RKK Creative"></meta>

    <meta name="twitter:card" content="summary_large_image"></meta>
    <meta name="twitter:site" content="@rkkcreative"></meta>
    <meta name="twitter:url" content="https://rkkcreative.xyz"></meta>
    <meta name="twitter:title" content="RKK Creative"></meta>
    <meta name="twitter:description" content="Providing fast, lean and highly adaptable websites and web applications build for speed and user experience"></meta>
    <meta name="twitter:image" content={ogImage}></meta>

    <script type="application/ld+json">{`
        {
            "@context": "http://schema.org",
            "@type": "LocalBusiness",
            "name": "RKK Creative",
            "description": "Providing fast, lean and highly adaptable websites and web applications build for speed and user experience",
            "image": ${ogImage},
            "logo": ${logo},
            "@id": "https://rkkcreative.xyz/",
            "url": "https://rkkcreative.xyz/",
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
              "https://www.facebook.com/rkkcreative/",
              "https://www.instagram.com/rkkcreative/"
              "https://www.twitter.com/rkkcreative/"
            ],
            "priceRange": "$"
        }
   `}</script>
  </Helmet>
  <DevComponent />
  </>
)

export default Development
