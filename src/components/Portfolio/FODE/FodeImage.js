import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Fade from 'react-reveal/Fade'
import {
  MainImage,
  TopImage,
  Flex,
  PageIndicator,
} from '../PortfolioShared'


const FodeImage = ({ data }) => {
  return (
    <>
    <Flex>
      <PageIndicator>01</PageIndicator>
      <Fade right delay={1200}>
        <MainImage fluid={data.imageOne.childImageSharp.fluid} alt='FODE Holding Page' />
      </Fade>
      <Fade bottom delay={900}>
        <TopImage fluid={data.imageTwo.childImageSharp.fluid} alt='FODE Mobile Landing Page' />
      </Fade>
    </Flex>
    </>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query Fode {
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
    render={data => <FodeImage data={data} />
  }
  />
)
