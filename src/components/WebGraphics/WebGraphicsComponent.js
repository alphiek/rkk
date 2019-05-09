import React, { Component } from 'react'
import { FullWidthWrapper, HeadingText, BodyText, Services, ServiceList } from '../Global/Shared'
import { PageWrapperCenter } from '../Global/ServiceFlexWrapper'
import NumberNav from '../Global/NumberNav'
import PortfolioLink from '../Global/PortfolioLink'
import BottomNav from '../Global/BottomNav'
import Carousel from './Carousel'
import { TransWrap } from '../Global/TransWrap'
import Fade from 'react-reveal/Fade'
import { graphicsData } from '../Copy/copy'


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
         {
           graphicsData.map(data =>
             <Fade bottom cascade delay={1000}>
               <HeadingText>{data.title}</HeadingText>
               <BodyText>{data.description}</BodyText>
               <div style={{ paddingBottom: '0.5em'}}>
               <Fade bottom cascade delay={1100}>
               <Services>Services</Services>
               {data.services.map(service =>
                 <ServiceList>{service}</ServiceList>
               )}
               </Fade>
               </div>
             </Fade>
           )
         }
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
