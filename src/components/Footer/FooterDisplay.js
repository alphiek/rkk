import React, { Component } from 'react'
import FooterContainer from './FooterContainer'
import Breakpoint, { BreakpointProvider} from 'react-socks'
import { setDefaultBreakpoints } from 'react-socks'

setDefaultBreakpoints([
  { tablet: 0 },
  { desktop: 1024 }
]);

const FooterDisplay = () => {
  return(
    <BreakpointProvider>
     <Breakpoint tablet only>
       <FooterContainer />
     </Breakpoint>
    </BreakpointProvider>
  )
}

  export default FooterDisplay
