import React, { Component } from "react"
import WebGraphicsComponent from '../components/WebGraphics/WebGraphicsComponent'
import { Helmet } from 'react-helmet'
import ogImage from '../images/ogImage.png'
import logo from '../images/icon.png'
import { BreakpointProvider} from 'react-socks'
import { setDefaultBreakpoints } from 'react-socks'

setDefaultBreakpoints([
  { mobile: 0 },
  { tablet: 824 },
  { desktop: 1025 }
]);

class WebGraphics extends Component {
  render() {
    return (
      <>
      <Helmet>
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css" />
        <link rel="stylesheet" type='text/css' href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css" />
        <html lang="en"/>
        <title>RKK Creative Web and Social Media Graphics Paphos</title>
        <meta name="description" content="High quality web and social media packages tailored to support your brand"></meta>

        <meta property="og:url" content="https://rkkcreative.xyz"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="Web and Social Media Graphics Paphos"></meta>
        <meta property="og:image" content={ogImage}></meta>
        <meta property="og:image:width" content="1200"></meta>
        <meta property="og:image:height" content="630"></meta>
        <meta property="og:description" content="Have a project in mind? Contact us for a free consultation"></meta>
        <meta property="og:site_name" content="RKK Creative"></meta>

        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" content="@rkkcreative"></meta>
        <meta name="twitter:url" content="https://rkkcreative.xyz"></meta>
        <meta name="twitter:title" content="RKK Creative"></meta>
        <meta name="twitter:description" content="Web and Social Media Graphics Paphos"></meta>
        <meta name="twitter:image" content={ogImage}></meta>

        <script type="application/ld+json">{`
            {
                "@context": "http://schema.org",
                "@type": "LocalBusiness",
                "name": "RKK Creative",
                "description": "Web and Social Media Graphics Paphos",
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
      <BreakpointProvider>
        <WebGraphicsComponent />
      </BreakpointProvider>
      </>
    )
  }
}


export default WebGraphics
