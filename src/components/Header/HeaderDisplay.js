import React from 'react'
import HeaderContainer from './HeaderContainer'
import { BreakpointProvider} from 'react-socks'
import { setDefaultBreakpoints } from 'react-socks'

setDefaultBreakpoints([
  { mobile: 0 },
  { tablet: 824 },
  { desktop: 1025 }
]);

const HeaderDisplay = () => {
  return (
    <>
    <BreakpointProvider>
        <HeaderContainer />
    </BreakpointProvider>
    </>
  )
}

export default HeaderDisplay
