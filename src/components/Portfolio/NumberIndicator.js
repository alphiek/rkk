import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import { color, spacing } from '../Global/variables'


const PageIndicator = styled.p`
   font-size: 14em;
   padding-bottom: 0.1em;
   color: ${color.secondary};
   letter-spacing: ${spacing.narrow};
   @media only screen and (max-width: 570px){
     font-size: 8em;
   }
`

const NumberIndicator = ({children}) => {
  return (
    <Fade top delay={400}>
    <PageIndicator>{children}</PageIndicator>
    </Fade>
  )
}

export default NumberIndicator
