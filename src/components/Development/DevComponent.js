import React, { Component } from 'react'
import { ServiceFlexWrapper } from '../Global/ServiceFlexWrapper'
import Video from './Video'


import MainContent from './MainContent'

class DevComponent extends Component {
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
      <ServiceFlexWrapper>
        <MainContent />
        <Video />
      </ServiceFlexWrapper>
    )
  }
}

export default DevComponent
