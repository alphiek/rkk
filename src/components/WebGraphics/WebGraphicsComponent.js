import React, { Component } from 'react'
import { FullWidthWrapper, HeadingText, BodyText } from '../Global/Shared'
import { PageWrapperCenter } from '../Global/ServiceFlexWrapper'
import NumberNav from '../Global/Numbers'
import PortfolioLink from '../Global/PortfolioLink'
import BottomNav from '../Global/BottomNav'
import Carousel from './Carousel'
import { TransWrap } from '../Global/TransWrap'
import Fade from 'react-reveal/Fade'


class WebGraphicsComponent extends Component {
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
   return(
     <TransWrap>
     <Fade top duration={1000}>
     <PageWrapperCenter>
      {!this.state.tablet ?
        <NumberNav />
        : null
      }
       <FullWidthWrapper>
         <Carousel />
         <Fade bottom delay={1000}>
         <HeadingText>Web Graphics</HeadingText>
         </Fade>
         <Fade bottom delay={1100}>
           <BodyText>
             Here at RKK we are passionate about high quality, eyecatching graphics whether for Social Media, Branding or Web use we
             dedicated to making your imagery stand out from the crowd. Each design is fully optimised to ensure that they are perfect solution
             for both web and mobile usage. From Social Media banners, custom vector illustrations, icons, image retouch to logo design our graphics
             packages are always tailored to support your brand and requirements.
           </BodyText>
           </Fade>
           <PortfolioLink />
       </FullWidthWrapper>
       {!this.state.tablet ?
         <BottomNav />
         : null
       }
     </PageWrapperCenter >
     </Fade>
   </TransWrap>
   )
 }
}


export default WebGraphicsComponent
