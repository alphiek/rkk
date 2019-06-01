import React, { Component } from 'react'
import Breakpoint from 'react-socks'
import Fade from 'react-reveal/Fade'
import NumberNav from '../Global/NumberNav'
import BottomNav from '../Global/BottomNav'
import Carousel from './Carousel'
import MainContent from './MainContent'
import { TransWrap } from '../Global/TransWrap'
import { FullWidthWrapper, GraphicsFlexWrapper } from '../Global/Shared'
import { PageWrapperCenter } from '../Global/ServiceFlexWrapper'


class WebGraphicsComponent extends Component {
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
          <TransWrap>
            <PageWrapperCenter>
              <Breakpoint desktop only>
                <NumberNav />
              </Breakpoint>
              <FullWidthWrapper>
                <Fade right delay={400}>
                  <Carousel />
                </Fade>
                <GraphicsFlexWrapper>
                <MainContent />
                </GraphicsFlexWrapper>
                <Breakpoint desktop only>
                  <BottomNav />
                </Breakpoint>
              </FullWidthWrapper>
            </PageWrapperCenter >
          </TransWrap>
          :
          null
      }
      </>
    )
  }
}


export default WebGraphicsComponent
