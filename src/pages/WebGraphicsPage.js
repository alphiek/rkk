import React from "react"
import WebGraphicsComponent from '../components/WebGraphics/WebGraphicsComponent'
import { Helmet } from 'react-helmet'

const WebGraphicsPage = () => (
  <React.Fragment>
  <Helmet>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css" />
  </Helmet>
  <WebGraphicsComponent />
  </React.Fragment>
)

export default WebGraphicsPage
