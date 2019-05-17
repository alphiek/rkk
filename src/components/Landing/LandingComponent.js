import React, { Component } from 'react'
import Breakpoint from 'react-socks'
import DesktopAnim from './DesktopAnim'
import DesktopLinks from './DesktopLinks'
import PlantTablet from './PlantTablet'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import { H1 } from '../Global/textSizes'
import { TitleContainer, PageContainer } from './Containers'

export const LandingTitle = styled(H1)`
  width: 90%;
  margin-top: 1em;
  margin-bottom: 1em;
`

class LandingComponent extends Component {
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
          <PageContainer>
              <TitleContainer>
              <Fade bottom cascade>
                  <LandingTitle>Freelance Web Design&#160;& Development</LandingTitle>
              </Fade>
              </TitleContainer>
            <Breakpoint desktop only>
              <DesktopAnim />
            </Breakpoint>
            <Breakpoint tablet down >
              <PlantTablet />
            </Breakpoint>
            <Breakpoint desktop only>
              <DesktopLinks />
            </Breakpoint>
          </PageContainer>
          :
          null
        }
      </>
    )
  }
}

export default LandingComponent
