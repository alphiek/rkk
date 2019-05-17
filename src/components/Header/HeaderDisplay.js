import React from 'react'
import HeaderContainer from './HeaderContainer'
import Logo from './Logo'
import Breakpoint, { BreakpointProvider} from 'react-socks'
import { setDefaultBreakpoints } from 'react-socks'

setDefaultBreakpoints([
  { tablet: 0 },
  { desktop: 1024 }
]);

const HeaderDisplay = () => {
  return (
    <>
    <BreakpointProvider>
    <Breakpoint desktop only >
      <HeaderContainer />
      </Breakpoint>
      </BreakpointProvider>
      <Logo />
    </>
  )
}

export default HeaderDisplay
