import React, { Component } from 'react'
import GridContainer from './GridContainer'
import Heading from './Heading'
import PropTypes from 'prop-types'
import { PortfolioPageWrapper } from '../Global/PortfolioShared'

import MainContent from './MainContent'

class PortfolioComponent extends Component {
  render() {
    const { images, onClickToggle, mainContent, grid } = this.props
    return (
      <PortfolioPageWrapper>
        {
          grid ?
          <Heading />
          :
          null
        }
        <MainContent
          mainContent={mainContent}
          onClickToggle={onClickToggle}
        />
        <GridContainer
          images={images}
          onClickToggle={onClickToggle}
          grid={grid}
        />
      </ PortfolioPageWrapper>
    )
  }
}

export default PortfolioComponent

PortfolioComponent.propTypes = {
  onClickToggle: PropTypes.func.isRequired,
  images: PropTypes.object.isRequired,
  mainContent: PropTypes.object.isRequired
}
