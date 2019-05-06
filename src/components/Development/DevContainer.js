import React, { Component } from 'react'
import DevComponent from './DevComponent'

class DevContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHidden: false,
      tablet: false
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
        tablet: window.innerWidth <= 1024
      })
    }

 render(){
   return (
     <DevComponent tablet={this.state.tablet}/>
   )
 }
}
export default DevContainer
