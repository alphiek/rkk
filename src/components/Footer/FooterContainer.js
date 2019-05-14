import React, { Component } from 'react'
import FooterComponent from './FooterComponent'

class FooterContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      desktop: true,
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
      })
    }

    render() {
      return (
        <>
          {!this.state.desktop &&
            <FooterComponent />
          }
        </>
      )
    }
  }

  export default FooterContainer
