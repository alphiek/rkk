import React, { useState } from 'react'
import { useSprings, animated as a, interpolate } from 'react-spring'
import styled from 'styled-components'
import { useGesture } from 'react-use-gesture'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Wrapper = styled.div`
  overscroll-behavior-y: contain;
  overflow: hidden;
  position: relative;
  width: 50vw;
  height: 100vh;
  cursor: pointer;
@media only screen
    and (max-width: 1024px) {
      height: 100%;
      width: 100%;
      overflow: visible;
    }
`

const Container = styled(a.div)`
  position:absolute;
  width: 100%;
  height: 100%;
  will-change: transform;
  display: flex;
  align-items: center;
  justify-content: flex-end;

`
const ImgWrapper = styled(a.div)`
  background-color: white;
  background-size: auto 85%;
  background-repeat: no-repeat;
  background-position: center center;
  margin-top: -10em;
  margin-right: 6em;
  width: 70%;
  max-width: 1200px;
  height: auto;
  max-height: 630px;
  will-change: transform;
  border-radius: 10px;
  box-shadow: 0 12.5px 30px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3);
@media only screen
    and (max-width: 1024px) {
      margin-top: 0;
      width: 70%;
      margin-left: auto;
      margin-right: auto;
    }
@media only screen
    and (max-width: 824px)
    and (orientation: landscape) {
      width:100%;
      margin-right: 1em;
    }
`
const ImageDeck = ({data}) => {
  const cards = [
    <Img fluid={data.imageOne.childImageSharp.fluid} />,
    <Img fluid={data.imageTwo.childImageSharp.fluid} />,
    <Img fluid={data.imageThree.childImageSharp.fluid} />
  ]

const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100})
const from = i => ({ x: 0, y: i * -4, rot: 0, scale: 1.5,y: -500 })
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

  const [gone] = useState(() => new Set())
  const [props, set] = useSprings(cards.length, i => ({...to(i), from: from(i)}))
  const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity}) => {
    const trigger = velocity > 0.05
    const dir = xDir < 0 ? -1 : 1
    if (!down && trigger) gone.add(index)
    set(i => {
      if (index !== i) return
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0
      const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0)
      const scale = down ? 1.1 : 1
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 }}
    })
    if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set(i => to(i)), 600)
  })
  return (
    <Wrapper>
     {
       props.map(({ x, y, rot, scale }, i) => (
         <Container key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
           <ImgWrapper {...bind(i)} style={{ transform: interpolate([rot, scale], trans)}}>
           {cards[i]}
           </ ImgWrapper>
         </Container>
    ))
    }
    </Wrapper>
  )
}


export default () => (
  <StaticQuery
    query={graphql`
      query WebDesignQuery {
        imageOne: file(relativePath: { eq: "WebDesign/LandspaceTheme.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageTwo: file(relativePath: { eq: "WebDesign/MditanoTheme.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageThree: file(relativePath: { eq: "WebDesign/SignatureLeaf.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <ImageDeck data={data} />
  }
  />
)
