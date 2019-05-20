import React from 'react'
import FooterContainer from './FooterContainer'
import Breakpoint, { BreakpointProvider} from 'react-socks'
import { setDefaultBreakpoints } from 'react-socks'

setDefaultBreakpoints([
  { mobile: 0 },
  { tablet: 824 },
  { desktop: 1025 }
]);

const FooterDisplay = () => {
  return(
    <BreakpointProvider>
      <footer>
        <Breakpoint tablet down>
          <FooterContainer />
        </Breakpoint>
      </footer>
   </BreakpointProvider>
  )
}

  export default FooterDisplay
