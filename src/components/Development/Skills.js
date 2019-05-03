import React from 'react'
import { useSpring, animated as a } from 'react-spring'
import styled from 'styled-components'
import css from '../../images/Logos/css.svg'
import datocms from '../../images/Logos/datocms.svg'
import gatsby from '../../images/Logos/gatsby.svg'
import html from '../../images/Logos/html.svg'
import javascript from '../../images/Logos/javascript.svg'
import react from '../../images/Logos/react.svg'
import sass from '../../images/Logos/sass.svg'
import webflow from '../../images/Logos/webflow.svg'
import wordpress from '../../images/Logos/wordpress.svg'
import graphql from '../../images/Logos/graphql.svg'

const LogoWrapper = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;
`

const Logo = styled(a.img)`
  width: 4em;
  position: absolute;
  will-change: transform;
`

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 9 - 150}px,${y / 12 - 100}px,0)`
const trans2 = (x, y) => `translate3d(${x / 2 + 35}px,${y / 2 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${x / 2 - 250}px,${y / 10 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 2 + 150}px,${y / 20 + 3.5}px,0)`
const trans5 = (x, y) => `translate3d(${x / 20 - 200}px,${y / 30 + 200}px,0)`
const trans6 = (x, y) => `translate3d(${x / 30 + -90}px,${y / 35 + 230}px,0)`
const trans7 = (x, y) => `translate3d(${x / 40 + 250}px,${y / 50 + 200}px,0)`
const trans8 = (x, y) => `translate3d(${x / 2 - 70}px,${y / 20 - 70}px,0)`
const trans9 = (x, y) => `translate3d(${x / 2 + 80}px,${y / 20 - 60}px,0)`
const trans10 = (x, y) => `translate3d(${x / 2 + 150}px,${y / 1 + 150}px,0)`


const Skills = () => {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 50, tension: 1000, friction: 140 }}))
  return (
    <LogoWrapper onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <Logo src={css} alt='CSS 3 Logo' style={{ transform: props.xy.interpolate(trans1) }} />
      <Logo src={datocms} alt='DatoCMS Logo' style={{ transform: props.xy.interpolate(trans2) }} />
      <Logo src={gatsby} alt='Gatsby Logo' style={{ transform: props.xy.interpolate(trans3) }} />
      <Logo src={html} alt='HTML 5 Logo' style={{ transform: props.xy.interpolate(trans4) }} />
      <Logo src={javascript} alt='Javascript Logo' style={{ transform: props.xy.interpolate(trans5) }} />
      <Logo src={react} alt='React Logo' style={{ transform: props.xy.interpolate(trans6) }} />
      <Logo src={sass} alt='SASS Logo' style={{ transform: props.xy.interpolate(trans7) }} />
      <Logo src={webflow} alt='Webflow Logo' style={{ transform: props.xy.interpolate(trans8) }} />
      <Logo src={wordpress} alt='Wordpress Logo' style={{ transform: props.xy.interpolate(trans9) }} />
      <Logo src={graphql} alt='Graphql Logo' style={{ transform: props.xy.interpolate(trans10) }} />
    </LogoWrapper>
  )
}


export default Skills
