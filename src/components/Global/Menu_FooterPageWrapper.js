import React from 'react'
import styled from 'styled-components'
import { useSpring, animated as a, config } from 'react-spring'
import { color } from './variables'
import PropTypes from 'prop-types'

const Wrapper = styled(a.div)`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${color.primaryFull};
  z-index: 5;
  transition: transform .3s
            cubic-bezier(0, .52, 0, 1);
overflow: scroll;
z-index: 1000;
`

export const PageWrapper = ({ children }) => {
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

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired
}
