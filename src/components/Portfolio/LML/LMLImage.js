import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Fade from 'react-reveal/Fade'
import {
  MainImage,
  TopImage,
  Flex,
  PageIndicator,
} from '../PortfolioShared'


const LMLImage = ({ data }) => {
  return (
    <>
    <Flex>
      <PageIndicator>02</PageIndicator>
      <Fade right delay={1200}>
        <MainImage fluid={data.imageOne.childImageSharp.fluid} alt='FODE Holding Page' />
      </Fade>
      <Fade bottom delay={900}>
        <TopImage style={{width: '8em', position: 'absolute', left: '-2em', top: '-8.5em' }}fluid={data.imageThree.childImageSharp.fluid} alt='FODE Mobile Landing Page' />
      </Fade>
      <Fade bottom delay={900}>
        <TopImage style={{width: '10em', position: 'absolute', left: '-10em', top: '-1em' }} fluid={data.imageTwo.childImageSharp.fluid} alt='FODE Mobile Landing Page' />
      </Fade>
    </Flex>
    </>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query LML {
        imageOne: file(relativePath: { eq: "LML/landing.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      imageTwo: file(relativePath: { eq: "LML/areas.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageThree: file(relativePath: { eq: "LML/mob.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `}
    render={data => <LMLImage data={data} />
  }
  />
)
