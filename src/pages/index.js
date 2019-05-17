import React from "react"
import { BreakpointProvider} from 'react-socks'
import { setDefaultBreakpoints } from 'react-socks'
import Helmet from "react-helmet"
import ogImage from '../images/ogImage.png'
import logo from '../images/icon.png'
import LandingComponent from '../components/Landing/LandingComponent'

setDefaultBreakpoints([
  { mobile: 0 },
  { tablet: 825 },
  { desktop: 1025 }
]);

const index = () => (
  <>
  <Helmet>
    <html lang="en"/>
    <title>RKK Creative Freelance Web Design and Development</title>
    <meta name="description" content="Freelance Web Design and Development Services"></meta>

    <meta property="og:url" content="https://rkkcreative.xyz"></meta>
    <meta property="og:type" content="website"></meta>
    <meta property="og:title" content="Freelance Web Design and Development Services"></meta>
    <meta property="og:image" content={ogImage}></meta>
    <meta property="og:image:width" content="1200"></meta>
    <meta property="og:image:height" content="630"></meta>
    <meta property="og:description" content="Have a project in mind? Contact us for a free consultation"></meta>
    <meta property="og:site_name" content="RKK Creative"></meta>

    <meta name="twitter:card" content="summary_large_image"></meta>
    <meta name="twitter:site" content="@rkkcreative"></meta>
    <meta name="twitter:url" content="https://rkkcreative.xyz"></meta>
    <meta name="twitter:title" content="RKK Creative"></meta>
    <meta name="twitter:description" content="Freelance Web Design and Development Services"></meta>
    <meta name="twitter:image" content={ogImage}></meta>

    <script type="application/ld+json">{`
        {
            "@context": "http://schema.org",
            "@type": "LocalBusiness",
            "name": "RKK Creative",
            "description": "Freelance Web Design and Development Services",
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
    <LandingComponent />
  </BreakpointProvider>
  </>
)

export default index
