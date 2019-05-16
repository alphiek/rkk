import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Fade from 'react-reveal/Fade'
import NumberIndicator from '../NumberIndicator'
import {
  MainImage,
  TopImage,
  Flex,
} from '../PortfolioShared'


const FodeImage = ({ data }) => {
  return (
    <>
    <Flex>
    <NumberIndicator>01</NumberIndicator>
      <Fade right delay={300}>
        <MainImage fluid={data.imageOne.childImageSharp.fluid} alt='FODE Holding Page' />
      </Fade>
      <Fade bottom delay={200}>
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
