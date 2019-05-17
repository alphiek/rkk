import React from 'react'
import FooterContainer from './FooterContainer'
import Breakpoint, { BreakpointProvider} from 'react-socks'
import { setDefaultBreakpoints } from 'react-socks'

setDefaultBreakpoints([
  { mobile: 0 },
  { tablet: 825 },
  { desktop: 1025 }
]);

const FooterDisplay = () => {
  return(
    <footer>
    <BreakpointProvider>
     <Breakpoint tablet down>
       <FooterContainer />
     </Breakpoint>
    </BreakpointProvider>
    </footer>
  )
}

  export default FooterDisplay
