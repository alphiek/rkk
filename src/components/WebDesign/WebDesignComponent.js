import React, { Component } from 'react'
import ImageDeck from './ImageDeck'
import { ServiceFlexWrapper, RightWrapper } from '../Global/ServiceFlexWrapper'
import MainContent from './MainContent'

class WebDesignComponent extends Component {
  constructor() {
    super()
    this.state = {
      loaded: false
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
              <ImageDeck />
            </RightWrapper>
          </ServiceFlexWrapper>
          :
          null
        }
     </>      
    )
  }
}

export default WebDesignComponent
