import React, { Component } from 'react'
import HeaderContainer from './HeaderContainer'
import Logo from './Logo'

class HeaderDisplay extends Component {
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
          {this.state.desktop &&
            <HeaderContainer />
          }
          <Logo />
        </>
      )
    }
  }

  export default HeaderDisplay
