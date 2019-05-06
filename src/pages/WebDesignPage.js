import React from "react"
import WebDesignContainer from '../components/WebDesign/WebDesignContainer'
import { Helmet } from 'react-helmet'
import webdesign from '../images/Graphics/Webdesign.png'
import logo from '../images/icon.png'

const WebDesignPage = () => {
  return (
    <>
    <Helmet>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css" />
      <html lang="en"/>
      <title>RKK Creative Web Design Paphos</title>
      <meta name="description" content="Custom crafted responsive websites and web applications to support brand direction and digital growth"></meta>

      <meta property="og:url" content="https://rkkcreative.xyz"></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:title" content="Web Design Paphos"></meta>
      <meta property="og:image" content={webdesign}></meta>
      <meta property="og:image:width" content="1200"></meta>
      <meta property="og:image:height" content="630"></meta>
      <meta property="og:description" content="Custom crafted responsive websites and web applications to support brand direction and digital growth"></meta>
      <meta property="og:site_name" content="RKK Creative"></meta>

      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:site" content="@rkkcreative"></meta>
      <meta name="twitter:url" content="https://rkkcreative.xyz"></meta>
      <meta name="twitter:title" content="RKK Creative"></meta>
      <meta name="twitter:description" content="Custom crafted responsive websites and web applications to support brand direction and digital growth"></meta>
      <meta name="twitter:image" content={webdesign}></meta>

      <script type="application/ld+json">{`
          {
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              "name": "RKK Creative",
              "description": "Web Design Paphos",
              "image": ${webdesign},
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
    <WebDesignContainer/>
    </>
  )
}

export default WebDesignPage
