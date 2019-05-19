import React from 'react'
import { useSpring, animated as a } from 'react-spring'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const FirstAnim = styled(a.div)`
  position: relative;
  width: 30vw;
  margin-left: -1em;
  margin-right: 6em;
  box-shadow: 21px 21px 24px -10px rgba(0,0,0,.27);
  @media only screen and (max-width: 1024px) {
   width: 38vw;
  }
  @media only screen and (max-width: 824px){
   width: 42vw;
   margin-right: 0em;
  }
  @media only screen and (max-width: 570px){
   width: 58vw;
   margin-bottom: 1em;
   margin-top: 1em;
  }
`

const SecondAnim = styled(a.div)`
  width: 20vw;
  position: absolute;
  top: -0.2em;
  margin-right: 7vw;
  box-shadow: 21px 21px 24px -10px rgba(0,0,0,.27);
  @media only screen and (max-width: 1024px) {
   width: 19vw;
  }
  @media only screen and (max-width: 824px){
   width: 20vw;
  }
  @media only screen and (max-width: 570px){
   width: 30vw;
   top: 0em;
  }

`

const ThirdAnim = styled(a.div)`
  width: 13vw;
  position: absolute;
  top: 8.5vw;
  margin-right: 11vw;
  box-shadow: 21px 21px 24px -10px rgba(0,0,0,.27);
  @media only screen and (max-width: 1024px) {
   width: 16vw;
   top: 15vw;
  }
  @media only screen and (max-width: 570px){
    width: 20vw;
    top: 33vw;
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
    to: ({ right: 0 }),
    from: ({right: -2000 })
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
    to: ({right: 0}),
    from: ({right: -2000 })
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
