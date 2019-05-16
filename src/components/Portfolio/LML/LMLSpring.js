import React from 'react'
import { useSpring, animated as a } from 'react-spring'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const FirstAnim = styled(a.div)`
  position: relative;
  width: 40vw;
  margin-left: -1em;
  box-shadow: 21px 21px 24px -10px rgba(0,0,0,.27);
  @media only screen and (max-width: 1024px) {
   width: 48vw;
  }
  @media only screen and (max-width: 824px){
   width: 47vw;
  }
  @media only screen and (max-width: 570px){
   width: 58vw;
  }
`

const SecondAnim = styled(a.div)`
  width: 13vw;
  position: absolute;
  top: 1.5em;
  box-shadow: 21px 21px 24px -10px rgba(0,0,0,.27);
  @media only screen and (max-width: 1024px) {
   width: 20vw;
  }
  @media only screen and (max-width: 824px){
   width: 20vw;
  }
  @media only screen and (max-width: 570px){
   width: 21vw;
  }

`

const ThirdAnim = styled(a.div)`
  width: 16vw;
  position: absolute;
  top: 11vw;
  box-shadow: 21px 21px 24px -10px rgba(0,0,0,.27);
  @media only screen and (max-width: 1024px) {
   width: 22vw;
   top: 17vw;
  }
  @media only screen and (max-width: 570px){
   top: 22vw;
  }
`

export const MainImageAnim = ({ children }) => {
  const props = useSpring({
    delay: 100,
    config: { mass: 1, tension: 280, friction: 60 },
    to: ({right: 0}),
    from: ({right: -3000 })
  })
  return (
    <FirstAnim style={props}>
    {children}
    </FirstAnim>
  )
}


export const SecondImageAnim = ({ children }) => {
  const props = useSpring({
    delay: 200,
    config: { mass: 1, tension: 280, friction: 60 },
    to: ({ right: '5vw' }),
    from: ({right: '-300vw' })
  })
  return (
    <SecondAnim style={props}>
    {children}
    </SecondAnim>
  )
}

export const ThirdImageAnim = ({ children }) => {
  const props = useSpring({
    delay: 100,
    config: { mass: 1, tension: 280, friction: 60 },
    to: ({right: '16.5vw'}),
    from: ({right: '-30vw' })
  })
  return (
    <ThirdAnim style={props}>
    {children}
    </ThirdAnim>
  )
}

MainImageAnim.propTypes = {
  children: PropTypes.node.isRequired,
}

SecondImageAnim.propTypes = {
  children: PropTypes.node.isRequired,
}

ThirdImageAnim.propTypes = {
  children: PropTypes.node.isRequired,
}
