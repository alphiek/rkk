import React from 'react'
import styled from 'styled-components'
import { useSpring, animated as a, config } from 'react-spring'
import { color } from '../Global/variables'

const Wrapper = styled(a.div)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${color.primaryFull};
  z-index: 5;
`

const PageWrapper = ({ children }) => {
  const props = useSpring({
    config: config.slow,
    bottom: '0px', from: { bottom: '-3000px' }
  })
  return (
    <Wrapper style={props}>
      {children}
    </Wrapper>
  )
}

export default PageWrapper
