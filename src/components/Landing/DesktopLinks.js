import React from 'react'
import Fade from 'react-reveal/Fade'
import { Portfolio, Services } from '../Global/textSizes'

const DesktopLinks = () => {
  return (
    <>
    <Fade delay={500} cascade>
      <Portfolio
        aria-label="Link to Portfolio"
        exit={{ length: 0.5 }}
        entry={{ delay: 0.8 }}
        to='/PortfolioPage'
        partiallyActive={true}
        >Portfolio
      </Portfolio>
    </Fade>
    <Fade delay={600} cascade>
      <Services
        aria-label="Link to Services"
        exit={{ length: 0.5 }}
        entry={{ delay: 0.8 }}
        to='/WebDesignPage'
        partiallyActive={true}
        >Services
      </Services>
    </Fade>
    </>
  )
}

export default DesktopLinks
