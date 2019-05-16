import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Fade from 'react-reveal/Fade'
import NumberIndicator from '../NumberIndicator'
import {
  MainImage,
  TopImage,
  Flex,
} from '../PortfolioShared'

const PPDImage = ({ data }) => {
  return (
    <>
    <Flex>
    <NumberIndicator>03</NumberIndicator>
      <Fade right delay={300}>
        <MainImage fluid={data.imageOne.childImageSharp.fluid} alt='FODE Holding Page' />
      </Fade>
      <Fade bottom delay={900}>
        <TopImage style={{width: '8em', position: 'absolute', left: '-3em', top: '-8em' }} fluid={data.imageTwo.childImageSharp.fluid} alt='FODE Mobile Landing Page' />
      </Fade>
      <Fade bottom delay={900}>
        <TopImage style={{width: '8em', position: 'absolute', left: '-7em', top: '1em' }}fluid={data.imageThree.childImageSharp.fluid} alt='FODE Mobile Landing Page' />
      </Fade>
    </Flex>
    </>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query PPD {
        imageOne: file(relativePath: { eq: "PPD/landing.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      imageTwo: file(relativePath: { eq: "PPD/contact.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageThree: file(relativePath: { eq: "PPD/card.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `}
    render={data => <PPDImage data={data} />
  }
  />
)
