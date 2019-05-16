import React, { Component } from 'react'
import { FullWidthWrapper, HeadingText, MobileWidthWrapper } from '../Global/Shared'
import { H2Services, ListItem, BodyText } from '../Global/textSizes'
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
     <PageWrapperCenter>
      {!this.state.tablet ?
        <NumberNav />
        : null
      }
       <FullWidthWrapper>
       <Fade right delay={200}>
         <Carousel />
        </Fade>
         {
           graphicsData.map(data =>
             <Fade key={data.key} bottom cascade>
             <MobileWidthWrapper>
               <HeadingText>{data.title}</HeadingText>
               <BodyText>{data.description}</BodyText>
               <div style={{ paddingBottom: '0.5em'}}>
                   <H2Services>Services</H2Services>
                   {data.services.map(service =>
                     <ListItem key={service}>{service}</ListItem>
                   )}
               </div>
               </MobileWidthWrapper>
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
   </TransWrap>
   )
 }
}


export default WebGraphicsComponent
