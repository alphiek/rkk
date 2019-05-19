import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { color } from '../../Global/variables'
import NumberIndicator from '../NumberIndicator'
import {
  Flex,
} from '../PortfolioShared'
import {
   MainImageAnim,
   SecondImageAnim,
} from './SCCSpring'

const SCCImage = ({ data }) => {
  return (
    <>
    <Flex>
    <NumberIndicator>05</NumberIndicator>
      <MainImageAnim>
        <Img
          backgroundColor={color.darkLink}
          fluid={data.imageOne.childImageSharp.fluid} alt='Minibus' />
      </MainImageAnim>
    </Flex>
    <SecondImageAnim>
      <Img
        backgroundColor={color.darkLink}
        fluid={data.imageTwo.childImageSharp.fluid} alt='Quick quote button' />
    </SecondImageAnim>
    </>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query SCC {
        imageOne: file(relativePath: { eq: "SCC/Southcoach.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      imageTwo: file(relativePath: { eq: "SCC/contact.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
    `}
    render={data => <SCCImage data={data} />
  }
  />
)
