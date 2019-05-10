import React from 'react'
import { useSpring, animated as a, config } from 'react-spring'
import { color } from '../Global/variables'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const PageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
@media only screen
    and (max-height: 424px)
    and (orientation: landscape) {
      min-height: 140vh;
    }
`

const BlueContainer = styled(a.div)`
  position: absolute;
  bottom: 0;
  width: 50vw;
  height: 70vh;
  z-index: 1;
  overflow: hidden;
  background-color: ${color.secondary};
`
const RedContainer = styled(BlueContainer)`
  right: 0;
  width: 20vw;
  height: 60vh;
  z-index: 2;
  background-color: ${color.accent};
`

export const BlueContainerAnim = ({ children }) => {
  const props = useSpring({
    delay: 300,
    config: { mass: 1, tension: 280, friction: 60 },
    to: ({right: 0}),
    from: ({right: -3000 })
  })
  return (
    <BlueContainer style={props}>
    {children}
    </BlueContainer>
  )
}

export const RedContainerAnim = ({ children }) => {
  const props = useSpring({
    delay: 300,
    config: config.slow,
    to: ({top: 0}),
    from: ({top: -3000 })
  })
  return (
    <RedContainer style={props}>
    {children}
    </RedContainer>
  )
}

BlueContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

RedContainer.propTypes = {
  children: PropTypes.node.isRequired,
}
