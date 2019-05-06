import React, { Component } from 'react'
import SeoOptComponent from './SeoOptComponent'

class SeoOptContainer extends Component {
  constructor() {
    super()
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
     <SeoOptComponent tablet={this.state.tablet}/>
   )
 }
}
export default SeoOptContainer
