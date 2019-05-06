import React from "react"
import SeoOptContainer from '../components/SeoOpt/SeoOptContainer'
import { Helmet } from 'react-helmet'
import seo from '../images/SEO.png'
import logo from '../images/icon.png'

const SeoOptimization = () => (
  <>
  <Helmet>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css" />
    <html lang="en"/>
    <title>RKK Creative SEO optmisation Paphos</title>
    <meta name="description" content="Technical SEO services to improve website rankings and visibility. Contact us for a free SEO healthcheck"></meta>

    <meta property="og:url" content="https://rkkcreative.xyz"></meta>
    <meta property="og:type" content="website"></meta>
    <meta property="og:title" content="SEO optmisation Paphos"></meta>
    <meta property="og:image" content={seo}></meta>
    <meta property="og:image:width" content="1200"></meta>
    <meta property="og:image:height" content="630"></meta>
    <meta property="og:description" content="Technical SEO services to improve website rankings and visibility. Contact us for a free SEO healthcheck"></meta>
    <meta property="og:site_name" content="RKK Creative"></meta>

    <meta name="twitter:card" content="summary_large_image"></meta>
    <meta name="twitter:site" content="@rkkcreative"></meta>
    <meta name="twitter:url" content="https://rkkcreative.xyz"></meta>
    <meta name="twitter:title" content="SEO optmisation Paphos"></meta>
    <meta name="twitter:description" content="Technical SEO services to improve website rankings and visibility. Contact us for a free SEO healthcheck"></meta>
    <meta name="twitter:image" content={seo}></meta>

    <script type="application/ld+json">{`
        {
            "@context": "http://schema.org",
            "@type": "LocalBusiness",
            "name": "RKK Creative",
            "description": "SEO optmisation Paphos",
            "image": ${seo},
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
  <SeoOptContainer />
  </>
)

export default SeoOptimization
