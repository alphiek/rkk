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
import snipcart from '../../images/Logos/snipcart.svg'
import jquery from '../../images/Logos/jquery.svg'
import Zoom from 'react-reveal/Zoom'


const LogoWrapper = styled.div`
  display: flex;
  width: 60%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;
`

const Logo = styled(a.img)`
  max-width:4em;
  position: absolute;
  will-change: transform;
`
const LogoHeight = styled(a.img)`
  max-width:2em;
  position: absolute;
  will-change: transform;
`

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 7 - 120}%,${y / 8 - 20}%,0)`
const trans2 = (x, y) => `translate3d(${x / 7 + 100}%,${y / 10 - 580}%,0)`
const trans3 = (x, y) => `translate3d(${x / 8 - 10}%,${y / 9 - 340}%,0)`
const trans4 = (x, y) => `translate3d(${x / 6 + 100}%,${y / 9 + 240}%,0)`
const trans5 = (x, y) => `translate3d(${x / 8 - 40}%,${y / 7 + 150}%,0)`
const trans6 = (x, y) => `translate3d(${x / 8 + 50}%,${y / 6 - 10}%,0)`
const trans7 = (x, y) => `translate3d(${x / 8 + 240}%,${y / 7 + 450}%,0)`
const trans8 = (x, y) => `translate3d(${x / 9 + 240}%,${y / 7 - 420}%,0)`
const trans9 = (x, y) => `translate3d(${x / 8 + 380}%,${y / 8 - 20}%,0)`
const trans10 = (x, y) => `translate3d(${x / 7 + 260}%,${y / 7 + 280}%,0)`
const trans11 = (x, y) => `translate3d(${x / 7 + 220}%,${y / 7 - 140}%,0)`
const trans12 = (x, y) => `translate3d(${x / 7 + 280}%,${y / 7 - 60}%,0)`




const Skills = () => {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 50, tension: 1000, friction: 140 }}))
  return (
    <Zoom delay={600}>
    <LogoWrapper onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <LogoHeight src={css} alt='CSS 3 Logo' style={{ transform: props.xy.interpolate(trans1) }} />
      <Logo src={datocms} alt='DatoCMS Logo' style={{ transform: props.xy.interpolate(trans2) }} />
      <Logo src={gatsby} alt='Gatsby Logo' style={{ transform: props.xy.interpolate(trans3) }} />
      <Logo src={html} alt='HTML 5 Logo' style={{ transform: props.xy.interpolate(trans4) }} />
      <LogoHeight src={javascript} alt='Javascript Logo' style={{ transform: props.xy.interpolate(trans5) }} />
      <Logo src={react} alt='React Logo' style={{ transform: props.xy.interpolate(trans6) }} />
      <LogoHeight src={sass} alt='SASS Logo' style={{ transform: props.xy.interpolate(trans7) }} />
      <Logo src={webflow} alt='Webflow Logo' style={{ transform: props.xy.interpolate(trans8) }} />
      <LogoHeight src={wordpress} alt='Wordpress Logo' style={{ transform: props.xy.interpolate(trans9) }} />
      <Logo src={graphql} alt='Graphql Logo' style={{ transform: props.xy.interpolate(trans10) }} />
      <LogoHeight src={snipcart} alt='Snipcart Logo' style={{ transform: props.xy.interpolate(trans11) }} />
      <Logo src={jquery} alt='jquery Logo' style={{ transform: props.xy.interpolate(trans12) }} />
    </LogoWrapper>
    </Zoom>
  )
}


export default Skills
