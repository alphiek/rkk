import React from 'react'
import { useSpring, animated as a } from 'react-spring'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const FirstAnim = styled(a.div)`
  position: relative;
  width: 30vw;
  margin-left: -1em;
  margin-right: 7em;
  margin-bottom: 1em;
  box-shadow: 21px 21px 24px -10px rgba(0,0,0,.27);
  @media only screen and (max-width: 1024px) {
   width: 43vw;
   margin-right: 4em;
  }
  @media only screen and (max-width: 824px){
   width: 40vw;
   margin-right: 0em;
  }
  @media only screen and (max-width: 570px){
   width: 50vw;
  }
`

const SecondAnim = styled(a.div)`
  width: 30vw;
  position: absolute;
  top:14vw;
  margin-right: 5vw;
  box-shadow: 21px 21px 24px -10px rgba(0,0,0,.27);
  @media only screen and (max-width: 1024px) {
   width: 40vw;
   top: 25vw;
  }
  @media only screen and (max-width: 824px){
   width: 38vw;
   top: 24vw;
  }
  @media only screen and (max-width: 570px){
   width: 45vw;
   top: 35vw;
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
    from: ({ right: -2000 })
  })
  return (
    <SecondAnim style={props}>
    {children}
    </SecondAnim>
  )
}

MainImageAnim.propTypes = {
  children: PropTypes.node.isRequired,
}

SecondImageAnim.propTypes = {
  children: PropTypes.node.isRequired,
}
