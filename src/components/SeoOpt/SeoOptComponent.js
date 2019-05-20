import React, { Component } from 'react'
import SeoImage from './SeoImage'
import MainContent from './MainContent'
import { RightWrapper, ServiceFlexWrapper } from '../Global/ServiceFlexWrapper'


class SeoOptComponent extends Component {
  constructor() {
    super()
    this.state = {
      loaded: false,
    }
  }

  componentDidMount() {
    this.setState({
      loaded: !this.state.loaded
    })
  }

  render() {
    return (
      <>
      {
        this.state.loaded ?
        <ServiceFlexWrapper>
          <MainContent />
          <RightWrapper>
          <SeoImage />
          </RightWrapper>
        </ServiceFlexWrapper>
        :
        null
      }
     </>
    )
  }
}

export default SeoOptComponent
