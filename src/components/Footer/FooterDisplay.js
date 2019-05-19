import React from 'react'
import FooterContainer from './FooterContainer'
import Breakpoint, { BreakpointProvider} from 'react-socks'
import { setDefaultBreakpoints } from 'react-socks'

setDefaultBreakpoints([
  { tablet: 0 },
  { desktop: 1025 }
]);

const FooterDisplay = () => {
  return(
    <BreakpointProvider>
     <Breakpoint tablet only>
      <footer>
         <FooterContainer />
      </footer>
    </Breakpoint>
   </BreakpointProvider>
  )
}

  export default FooterDisplay
