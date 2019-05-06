import React, { Component } from 'react'
import LandingComponent from './LandingComponent'
import TabletLanding from './TabletLanding'
import MobileLanding from './MobileLanding'



class LandingContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      desktop: true,
      tablet: false,
      mobile: false,
    }
    this.updatePredicate = this.updatePredicate.bind(this)
  }

  componentDidMount() {
    this.updatePredicate()
    window.addEventListener('resize', this.updatePredicate)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updatePredicate)
  }

  updatePredicate() {
      this.setState({
        desktop: window.innerWidth > 1024,
        tablet: window.innerWidth <= 1024 && window.innerWidth > 824,
        mobile: window.innerWidth <= 824
      })
    }

  render() {
    return (
      <>
        {this.state.desktop ?
          <LandingComponent /> :
          null
        }
        {this.state.tablet ?
          <TabletLanding /> :
          null
        }
        {this.state.mobile ?
          <MobileLanding /> :
          null
        }
      </>
    )
  }
}

export default LandingContainer
