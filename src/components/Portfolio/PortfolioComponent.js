import React, { Component } from 'react'
import { PortfolioPageWrapper } from '../Global/PortfolioShared'
import { TransWrap } from '../Global/TransWrap'
import GridContainer from './GridContainer'
import Heading from './Heading'
import LML from './LML'
import PPD from './PPD'
import FODE from './FODE'

class PortfolioComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      main: true,
      lml:  false,
      ppd: false,
      lk: false,
      fode: false,
      south: false,
      forager: false,
    }
    this.toggleMain = this.toggleMain.bind(this)
  }

  toggleMain(event) {
    event.preventDefault()
    console.log(event.target.id)
    const name = event.target.id
    console.log(name)
    this.setState(
      {
       main: !this.state.main,
       [name]: !this.state.name
      },
    )
  }

  render() {
    return (
      <TransWrap>
      <PortfolioPageWrapper>
        <Heading />
        <GridContainer toggleMain={this.toggleMain} state={this.state}/>
      </PortfolioPageWrapper >
      {
        this.state.fode ?
        <FODE />
        : null
      }
      {
        this.state.ppd ?
        <PPD />
        : null
      }
      {
        this.state.lml ?
        <LML />
        : null
      }
    </TransWrap>
    )
  }
}

export default PortfolioComponent
