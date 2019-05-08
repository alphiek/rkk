import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'
import { RightWrapper } from '../../Global/ServiceFlexWrapper'

const MainImage = styled(Img)`
  position: absolute;
  right: 0;
  margin-left: 3em;
  width: 40vw;
  height: auto;
  transform: perspective(2000px) rotateX(15deg) rotateY(-15deg) rotateZ(15deg);
  box-shadow: 21px 21px 24px -10px rgba(0,0,0,.27);
`
const TopImage = styled(MainImage)`
  margin-left: 0;
  margin-top:  -10em;
  z-index: 5;
  width: 13vw;
`
const LKImage = ({data}) => {
  return (
    <RightWrapper>
      <Fade right delay={1200}>
        <MainImage fluid={data.imageOne.childImageSharp.fluid} alt='FODE Holding Page' />
      </Fade>
      <Fade bottom delay={900}>
        <TopImage fluid={data.imageTwo.childImageSharp.fluid} alt='FODE Mobile Landing Page' />
      </Fade>
    </RightWrapper>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query LK {
        imageOne: file(relativePath: { eq: "FODE/holding.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      imageTwo: file(relativePath: { eq: "FODE/mob.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `}
    render={data => <LKImage data={data} />
  }
  />
)
